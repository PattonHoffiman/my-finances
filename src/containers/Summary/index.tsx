import { Section } from '../../components/Section';
import { InnerHeader } from '../../components/InnerHeader';

import { HeaderContent, Content, Info } from './style';

export function Summary() {
  return (
    <Section>
      <InnerHeader>
        <HeaderContent>June</HeaderContent>
        <HeaderContent className="light">2021</HeaderContent>
      </InnerHeader>
      <Content>
        <Info>
          <strong>Incomes</strong>
          <span>R$ 5.000,00</span>
        </Info>
        <Info>
          <strong>Outcomes</strong>
          <span>R$ 3.245,00</span>
        </Info>
        <Info className="highlight-green">
          <strong>Total</strong>
          <span>R$ 2.755,00</span>
        </Info>
      </Content>
    </Section>
  );
}