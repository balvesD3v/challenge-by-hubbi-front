/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useRef, useState } from "react";

interface Transaction {
  id: number;
  type: string;
  date: string;
  product: string;
  value: number;
  seller: string;
}

export const UploadForm: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [dataTransaction, setDataTransaction] = useState<Transaction[] | null>(
    null
  );
  const [value, setValue] = useState(0);

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (fileInputRef.current && fileInputRef.current.files) {
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

        const response = await axios.get<Transaction[]>(
          "http://localhost:3000/transactions/data"
        );
        setDataTransaction(response.data);

        for (let value in response.data.values) {
          value += Number(value);
        }
      } catch (error) {
        console.error("Error uploading file", error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleFileUpload}>
        <div>
          <input
            type="file"
            name="file"
            ref={(input) => (fileInputRef.current = input)}
          />
          <button type="submit">Upload</button>
        </div>
      </form>

      <div>
        {dataTransaction &&
          dataTransaction.map((transaction) => (
            <div key={transaction.id}>
              <p>ID: {transaction.id}</p>
              <p>Type: {transaction.type}</p>
              <p>Date: {transaction.date}</p>
              <p>Product: {transaction.product}</p>
              <p>Value: {transaction.value}</p>
              <p>Seller: {transaction.seller}</p>
              <br />
              <br />
              <p>Total Value: {} </p>
            </div>
          ))}
      </div>
    </div>
  );
};
