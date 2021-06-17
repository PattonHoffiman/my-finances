import { Container } from './style';

interface IInfoProps {
  className?: string;
}

export const Info: React.FC<IInfoProps> = ({ children, className }) => (
  <Container className={className}>
    {children}
  </Container>
);