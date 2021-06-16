import { Container } from './style';

export const Section: React.FC = ({children}) => (
  <Container className="glass">
    {children}
  </Container>
);