
export const calculateTotal = (items: { price: number }[]) => {
  return items.reduce((sum, item) => sum + (item.price || 0), 0);
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('da-DK', {
    style: 'currency',
    currency: 'DKK',
  }).format(price);
};
