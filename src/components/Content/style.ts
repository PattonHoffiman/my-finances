import styled from 'styled-components';

export const Container = styled.div`  
  position: relative;
  overflow: hidden;
  
  display: flex;  
  flex-direction: column;
  justify-content: center;
    
  height: 250px;
  margin: 0 1.5rem;
  padding-bottom: 1rem;

  div:last-child {
    margin-bottom: 0;
  }
`;