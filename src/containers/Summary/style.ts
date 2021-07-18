import styled from 'styled-components';

export const ContentValue = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: .5rem;
  font-family: 'Orbitron', monospace;
`;

export const HeaderContent = styled.span`
  font-weight: 600;
  margin-top: .5rem;
  font-size: 2.5rem;  

  &.light {
    color: var(--white);
  }
`;

export const ContentTitle = styled.strong`
  font-weight: 400;
  margin-top: .5rem;
  font-size: 1.25rem;

  &.highlight {
    font-weight: 500;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 25rem;

  display: flex;
  align-items: center;
  justify-content: center;  

  .lds-roller {
    display: inline-block;
    position: relative;
    
    width: 5rem;
    height: 5rem;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 2.5rem 2.5rem;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    
    width: .4375rem;
    height: .4375rem;
    
    border-radius: 50%;
    margin: -0.25rem 0 0 -0.25rem;
    background: var(--white);
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 3.9375rem;
    left: 3.9375rem;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 4.25rem;
    left: 3.5rem;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    left: 3rem;
    top: 4.4375rem;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 4.5rem;
    left: 2.5rem;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    left: 2rem;
    top: 4.4375rem;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 4.25rem;
    left: 1.5rem;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 3.9375rem;
    left: 1.0625rem;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 3.5rem;
    left: .75rem;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  `;