const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export const formatCurrency = (value: number | undefined) => {
  if (value === undefined || null) {
    console.log('invalid value');
    return;
  }

  return currencyFormatter.format(value);
};
