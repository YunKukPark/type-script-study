import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <H1>안녕</H1>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.textColor};
`;

export default App;
