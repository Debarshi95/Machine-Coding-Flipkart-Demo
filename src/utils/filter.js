export const filterProducts = (products, cb) => {
  const prod = [...products];

  const filteredArr = prod.filter((i) => cb(i));
  return filteredArr;
};

export const sortProducts = (products, order) => {
  const prod = [...products];
  if (order === 0) {
    const incr = prod.sort((a, b) => a.price - b.price);
    return incr;
  }
  if (order === 1) {
    return prod.sort((a, b) => b.price - a.price);
  }
  return prod;
};
