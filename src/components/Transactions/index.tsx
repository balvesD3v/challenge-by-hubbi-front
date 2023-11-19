import React from "react";
import { TransactionListContainer, Table, TableRow, TableCell } from "./styles";
import { format } from "date-fns-tz";

interface Transaction {
  id: number;
  type: string;
  date: string;
  product: string;
  value: number;
  seller: string;
}

interface TransactionListProps {
  dataTransaction: Transaction[] | null;
}

export const TransactionList: React.FC<TransactionListProps> = ({
  dataTransaction = [],
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "yyyy-MM-dd'T'HH:mm:ssXXX", { timeZone: "GMT" });
  };

  return (
    <TransactionListContainer>
      <Table>
        <thead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Seller</TableCell>
          </TableRow>
        </thead>
        <tbody>
          {dataTransaction &&
            dataTransaction.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{formatDate(transaction.date)}</TableCell>
                <TableCell>{transaction.product}</TableCell>
                <TableCell>{transaction.value}</TableCell>
                <TableCell>{transaction.seller}</TableCell>
              </TableRow>
            ))}
        </tbody>
      </Table>
    </TransactionListContainer>
  );
};
