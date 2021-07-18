import { Container } from './style';
import incomeImg from '../../../assets/income.svg';
import outcomeImg from '../../../assets/outcome.svg';

interface IIncomeOutcomeButtonProps {
  active: boolean;
  onClickEvent: () => void;
  type: 'income' | 'outcome';
}

export const IncomeOutcomeButton: React.FC<IIncomeOutcomeButtonProps> = ({
  type,
  active,
  onClickEvent
}) => {
  return (
    <Container
      type={type}
      active={active}
      className={type}
    >
      {type === 'income' ?
        (
          <button type='button' onClick={() => onClickEvent()}>
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </button>
        ) : (
          <button type='button' onClick={() => onClickEvent()}>
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </button>
        )
      }
    </Container>
  );
}