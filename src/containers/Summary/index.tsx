import { useSpring, animated as a } from 'react-spring';

import { Info } from '../../components/Info';
import { Content } from '../../components/Content';
import { InnerHeader } from '../../components/InnerHeader';
import { HeaderContent, ContentValue, ContentTitle } from './style';

interface ISummaryProps {
  show: boolean;
}

export const Summary: React.FC<ISummaryProps> = ({ show }) => {
  const props = useSpring({
    opacity: show ? 1 : 0,
    display: show ? 'block' : 'none',
  });

  return (    
    <a.div style={props}>
      <InnerHeader>
        <HeaderContent>June</HeaderContent>
        <HeaderContent className="light">2021</HeaderContent>
      </InnerHeader>
      <Content>
        <Info>
          <ContentTitle>Incomes</ContentTitle>
          <ContentValue>R$ 5.000,00</ContentValue>
        </Info>
        <Info>
          <ContentTitle>Outcomes</ContentTitle>
          <ContentValue>R$ 3.245,00</ContentValue>
        </Info>
        <Info className="highlight-green">
          <ContentTitle className="highlight">Total</ContentTitle>
          <ContentValue>R$ 2.755,00</ContentValue>
        </Info>
      </Content>
    </a.div>
  );
}