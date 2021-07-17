import { Container } from './style';

interface IIconButtonProps {
  icon: string;
  name: string;
  onOpenNewTransactionModal: () => void;
}

export const IconButton: React.FC<IIconButtonProps> = ({ icon, name, onOpenNewTransactionModal }) => {
  return (
    <Container onClick={onOpenNewTransactionModal}>
      <img src={icon} alt={name} />
    </Container>
  );
}