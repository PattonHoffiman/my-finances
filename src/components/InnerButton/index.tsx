import { Container } from './style';

interface IInnerButtonProps {
  icon: string;
  name: string;
  option: string;  
  hidden: boolean;
  setAnimation(option: string): void;
}

export function InnerButton({ icon, name, option, hidden, setAnimation } : IInnerButtonProps) {
  return (
    <Container
      isHidden={hidden}
      className={option}
      onClick={() => setAnimation(option)}
    >
      <img src={icon} alt={name} />
    </Container>
  );
}