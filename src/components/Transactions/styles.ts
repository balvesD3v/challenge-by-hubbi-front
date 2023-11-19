import styled from "styled-components";

export const TransactionListContainer = styled.div`
  overflow-x: auto; /* Adicione uma barra de rolagem horizontal quando necessário */
  max-height: 400px;
  background-color: #fff;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

export const TableRow = styled.tr`
  background-color: #0066ff;
  &:nth-child(even) {
    background-color: #0000ff;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;
