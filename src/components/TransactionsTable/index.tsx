import { ReactNode } from 'react';

import { Container } from './styles';

interface TransactionsTableProps {
  children: ReactNode;
}

function TransactionsTable({ children }: TransactionsTableProps) {
  return (
    <Container>
      <h1>TransactionsTable</h1>
      {children}
    </Container>
  );
};

export default TransactionsTable;
