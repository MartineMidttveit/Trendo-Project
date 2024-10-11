const useCurrencyFormatter = (locale = 'en-US', currency = 'USD') => {
    const formatCurrency = (amount) => {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
      }).format(amount);
    };
  
    return formatCurrency;
  };
  
  export default useCurrencyFormatter;
  