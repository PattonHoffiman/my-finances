import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const toPtBR = (date: Date) => {
  return format(new Date(date), 'dd/MM/yyyy', { locale: ptBR });
}