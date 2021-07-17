export function toBRL(amount) {
  return amount.toLocaleString('pt-br', {
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 2
  });
}