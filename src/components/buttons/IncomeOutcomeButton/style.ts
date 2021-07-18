import styled, { css } from 'styled-components';

interface IContainerProps {
  active: boolean;
  type: 'income' | 'outcome';
}

export const Container = styled.div<IContainerProps>`
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    img {
      margin-right: .5rem;
    }
  ${props => props.active === false &&
    css`
        background: var(--lightest-blue);
      `
  }

  ${props => props.active && props.type === 'income' &&
    css`
        background: rgba(5,176,123,.1);
      `
  }

  ${props => props.active && props.type === 'outcome' &&
    css`
        background: rgba(255,49,0,.1);
      `
  }
  }
`;