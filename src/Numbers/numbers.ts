export const number = (
  value: number,
  reduceZeroFraction = true,
  int = 'es-ES'
): string => {
  if (reduceZeroFraction && value % 1 === 0) {
    return new Intl.NumberFormat(int, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return new Intl.NumberFormat(int, {
    minimumFractionDigits: 2,
  }).format(value)
}
