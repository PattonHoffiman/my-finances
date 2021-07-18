import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 2rem 5rem;
  background: var(--light-blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
    margin-left: .5rem;
    color: var(--white);    
    font-family: 'Orbitron', monospace;
  }
`;