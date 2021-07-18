import styled, { keyframes, css } from 'styled-components';

interface IFilterProps {
  state: string;
}

const Move = keyframes`
  from {    
    transform: translateX(0%) rotate(180deg);
  } to {    
    transform: translateX(-25%) rotate(180deg);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;  
  
  scrollbar-width: none;
  scrollbar-color: transparent;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const Filter = styled.button<IFilterProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.25rem;
  height: 2.5rem;

  border: none;  
  background: transparent;

  svg {
    width: 100%;
    height: 100%;
    transition: all .3s;
    
    ${props => props.state === 'up' &&
    css`
        fill: var(--white);
        path {
          &.up {
            fill: var(--complementary-green);
          }          
        }
      `
  }

    ${props => props.state === 'down' &&
    css`
        fill: var(--white);
        path {
          &.down {
            fill: var(--complementary-red);
          }          
        }
      `
  }

    ${props => props.state === 'fromA' &&
    css`
        fill: var(--white);
        path {
          &.letterA {
            fill: var(--complementary-green);
          }          
        }
      `
  }

    ${props => props.state === 'fromZ' &&
    css`
        fill: var(--white);
        path {
          &.letterZ {
            fill: var(--complementary-green);
          }
        }
      `
  }

    ${props => props.state === 'default' &&
    css`
        fill: var(--dark-blue);
        path { fill: var(--white); }
      `
  }

    ${props => props.state === 'income' &&
    css`
        fill: var(--white);        
        path { fill: var(--complementary-green); }
      `
  }

    ${props => props.state === 'outcome' &&
    css`
        fill: var(--white);
        path { fill: var(--complementary-red); }
      `
  }
  }
`;

export const BackButton = styled.button`
  display: flex;  
  align-items: center;
  justify-content: center;


  width: 2.1875rem;
  height: 2.1875rem;
  
  border: none;  
  background: transparent;
  transform: rotate(180deg);

  &:hover {
    animation: ${Move} .3s ease-out forwards;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    margin-right: .25rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ContentValue = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  font-family: 'Orbitron', monospace;

  &.income {
    color: var(--complementary-green);
  }

  &.outcome {
    color: var(--complementary-red);
  }
`;

export const ContentName = styled.strong`
  font-weight: 500;
  margin-top: .5rem;
  font-size: 1.25rem;
`;

export const ContentSecondary = styled.span`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: .5rem;
  color: var(--light-blue);
`;

export const SecondaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: .75rem;

  span:last-child {
    margin-right: .5rem;
  }
`;