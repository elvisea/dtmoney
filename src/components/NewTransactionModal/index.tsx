import { ReactNode } from 'react';

import { Container } from './styles';

interface NewTransactionModalProps {
  children: ReactNode;
}

function NewTransactionModal({ children }: NewTransactionModalProps) {
  return (
    <Container>
      <h1>NewTransactionModal</h1>
      {children}
    </Container>
  );
};

export default NewTransactionModal;
