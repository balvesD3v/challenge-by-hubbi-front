/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { TransactionList } from "../Transactions/index";
import {
  BackgroundColor,
  FormStyled,
  DivFormStyled,
  InputStyled,
  LabelStyled,
  TransactionsDiv,
  Error,
} from "./styles";
import { Button } from "../Button";

interface Transaction {
  id: number;
  type: string;
  date: string;
  product: string;
  value: number;
  seller: string;
}

export default function UploadForm() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [dataTransaction, setDataTransaction] = useState<Transaction[] | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Transaction[] | null>(null);
  const [valores, setValores] = useState<number[]>([]);
  const [total, setTotal] = useState(0);

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (fileInputRef.current && fileInputRef.current.files) {
      const uploadedFile = fileInputRef.current.files[0];

      if (
        !fileInputRef.current ||
        !fileInputRef.current.files ||
        fileInputRef.current.files.length === 0
      ) {
        setError("Please choose a file to upload");
        return;
      }

      if (uploadedFile && uploadedFile.name !== "sales.txt") {
        setError("Please upload a file named 'sales.txt'.");
        return;
      }

      const formData = new FormData();
      formData.append("file", fileInputRef.current.files[0]);

      try {
        await axios.post(
          "http://localhost:3000/transactions/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const response = await axios.get(
          "http://localhost:3000/transactions/data"
        );
        setDataTransaction(response.data);
        setError(null);
        fetchData();
      } catch (error: any) {
        setError(error.response.data.message || "Error loading file");
      }
    }
  };

  async function fetchData() {
    try {
      const data = await axios.get("http://localhost:3000/transactions/data");
      setData(data.data);
      setDataTransaction(data.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setError("Error fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data != null) {
      setValores([...data.map((d) => d.value)]);
    }
  }, [data]);

  useEffect(() => {
    if (valores != null) {
      const soma = valores.reduce((n1, n2) => n1 + n2, 0);

      setTotal(soma);
    }
  }, [valores]);

  return (
    <BackgroundColor>
      <FormStyled onSubmit={handleFileUpload}>
        <DivFormStyled>
          <InputStyled
            type="file"
            name="file"
            id="file"
            ref={fileInputRef}
            onChange={(e) => handleFileUpload(e)}
          />
          <LabelStyled htmlFor="file">Escolher arquivo</LabelStyled>
          <Button />
        </DivFormStyled>
      </FormStyled>

      <p>Total Value Transactions: {`R$${total}`}</p>

      {error && <Error>{error}</Error>}

      <TransactionsDiv>
        <h1>Transactions List</h1>
        <TransactionList dataTransaction={dataTransaction} />
      </TransactionsDiv>
    </BackgroundColor>
  );
}
