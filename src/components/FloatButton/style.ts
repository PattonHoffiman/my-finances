import styled, { keyframes, css } from 'styled-components';

interface IContainerProps {
  init: boolean;
  animate: boolean;
}

interface ITitleProps {
  isSelected: boolean;
}

const Show = keyframes`
  0% {
    opacity: 0;
    display: none;
    transform: translate(0rem, -3.75rem);
  } 75% {
    opacity: 0;
  } 85% {
    opacity: .25;
  } 95% {
    opacity: .5;
  } 100% {
    opacity: 1;
    display: block;
    transform: translate(6.75rem, -3.75rem);
  }
`;

const Expand = keyframes`
  from { 
    width: 25%;
    border-radius: 3rem;
  } to {
    width: 100%;
    border-radius: .25rem;
  }
`;

const Shrink = keyframes`
  from {
    width: 100%;
    border-radius: .25rem;
  } to {
    width: 25%;
    border-radius: 3rem;
  }
`;

const Appear = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
    display: flex;
  }
`

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 3rem;
  
  ${props =>
    !props.init && props.animate &&
    css`
      button {
        margin-right: 1rem;
        animation: ${Appear} 1s forwards;        

        &:last-child {
          margin-right: 0;
        }
      }

      animation: ${Expand} .3s ease-out forwards;
    `
  }

  ${props =>
    !props.init && !props.animate &&
    css`
      button {
        opacity: 0;

        &.add, &.list, &.menu, &.change {
          opacity: 1;
        }
      }

      animation: ${Shrink} .3s ease-in forwards;
    `
  }
`;

export const Title = styled.span<ITitleProps>`
  position: absolute;
  
  font-weight: 500;
  font-size: 1.5rem;
  color: var(--white);
  transform: translate(0rem, -3.75rem);

  ${props => props.isSelected &&
    css`
      animation: ${Show} .5s ease-out forwards;
    `
  }

  ${props => !props.isSelected &&
    css`
      opacity: 0;
      display: none;
      transform: translate(0rem, -3.75rem);
    `
  }
`;