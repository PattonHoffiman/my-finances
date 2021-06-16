import styled from 'styled-components';

export const HeaderContent = styled.span`  
  font-weight: 600;
  margin-top: .5rem;
  font-size: 2.5rem;

  &.light {
    color: var(--white);
  }
`;

export const Content = styled.div`
  display: grid;
  margin: .5rem 1.5rem;
  padding-bottom: 1rem;
  grid-template-rows: repeat(3, 1fr);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 75px;
  margin-bottom: .5rem;
  border-radius: .5rem;
  background: var(--white);
  font-family: 'Orbitron', monospace;
  
  strong {
    font-weight: 400;
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 1.25rem;
  }

  span {
    font-weight: 600;
    font-size: 1.5rem;
    margin-left: 1rem;
    margin-top: .25rem;
  }

  &.highlight-red {
    color: var(--white);
    background: var(--complementary-red);
  }

  &.highlight-green {
    color: var(--white);
    background: var(--complementary-green);
  }
`;