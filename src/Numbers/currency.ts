export const currency = (
  value: number,
  reduceZeroFraction = true,
  curr = 'EUR',
  int = 'es-ES'
): string => {
  if (reduceZeroFraction && value % 1 === 0) {
    return new Intl.NumberFormat(int, {
      style: 'currency',
      currency: curr,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return new Intl.NumberFormat(int, {
    style: 'currency',
    currency: curr,
    minimumFractionDigits: 2,
  }).format(value)
}
