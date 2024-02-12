/**
 * A utility function that takes in a number and converts it to a string with two fraction digits and a dollar sign at beginning.
 * @param {number} value - the number to be converted to a currency string.
 */

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export const formatCurrency = (value: number | null) => {
  if (!value) {
    console.error('invalid value');
    return;
  }

  return currencyFormatter.format(value);
};
