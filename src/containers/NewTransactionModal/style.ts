import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin: 1rem 2rem;

  input, button {
    outline: none;
    height: 3.5rem;
    font-size: 1.5rem;
    
    border: 0;
    border-radius: 5px;
  }

  button {
    font-weight: 500;
    color: var(--white);
  }

  input {
    padding-left: .5rem;
    margin-bottom: .5rem;
    color: var(--darkest-blue);
    background: var(--lightest-blue);

    &::placeholder {
      opacity: .7;
      color: var(--light-blue);
    }
  }

  .input-output-container {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: .5rem;

    .income {
      margin-right: .5rem;
    }

    .income, .outcome {
      button {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }

  .submit {
    background: var(--darkest-blue);
  }
`;

export const HeaderContent = styled.span`
  font-weight: 600;
  font-size: 1.5rem;

  &.light {
    color: var(--white);
  }
`;