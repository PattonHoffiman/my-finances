import styled, { css, keyframes } from 'styled-components';

interface IContainerProps {
  isHidden: boolean;
}

const Grow = keyframes`
  from {
    transform: scale(1);
  } to {
    transform: scale(1.2);
  }
`;
const Shrink = keyframes`
  from {
    transform: scale(1.2);
  } to {
    transform: scale(1);
  }
`;


export const Container = styled.button<IContainerProps>`
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;
  border: none;
  position: relative;
  background: transparent;

  img {
    width: 100%;
    height: 100%;
    animation: ${Shrink} .3s forwards;
  }

  &:hover img {
    animation: ${Grow} .3s forwards;
  }

  ${props => props.isHidden &&
    css`
      display: none;
    `
  }
`;