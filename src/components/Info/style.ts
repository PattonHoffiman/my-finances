import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;

  padding-left: .5rem;
  margin-bottom: .5rem;
  border-radius: .5rem;
  background: var(--white);

  &.highlight-red {    
    color: var(--white);
    background: var(--complementary-red);
  }

  &.highlight-green {    
    color: var(--white);
    background: var(--complementary-green);
  }
`;