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