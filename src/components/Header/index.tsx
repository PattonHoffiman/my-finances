import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="My Finances" />
        <span>My Finances</span>
      </Content>
    </Container>
  );
}