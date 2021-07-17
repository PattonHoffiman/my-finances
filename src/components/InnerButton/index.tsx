import { Container } from './style';

interface IInnerButtonProps {
  icon: string;
  name: string;
  option: string;
  hidden: boolean;
  setAnimation?: (option: string) => void;
  onOpenNewTransactionModal?: () => void;
}

export const InnerButton: React.FC<IInnerButtonProps> = ({
  icon,
  name,
  option,
  hidden,
  children,
  setAnimation,
  onOpenNewTransactionModal
}) => {
  if (setAnimation) {
    if (onOpenNewTransactionModal) {
      return (
        <Container
          isHidden={hidden}
          className={option}
          onClick={() => {
            setAnimation(option);
            onOpenNewTransactionModal();
          }}
        >
          <img src={icon} alt={name} />
        </Container>
      );
    } else {
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
  } else if (onOpenNewTransactionModal) {
    return (
      <Container
        isHidden={hidden}
        className={option}
        onClick={() => onOpenNewTransactionModal()}
      >
        <img src={icon} alt={name} />
      </Container>
    );
  } else {
    return (
      <Container
        isHidden={hidden}
        className={option}
      >
        {children}
      </Container>
    );
  }
}