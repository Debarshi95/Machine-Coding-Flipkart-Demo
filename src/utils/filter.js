export const filterProducts = async (filterName, filterValue) => {
  const res = await fetch("/assets/data.json");
  const data = await res.json();

  if (filterName !== null) {
    const arr = data.products.filter(
      (product) => product[filterName] === filterValue
    );

    // console.log(arr);
    return arr;
  }
  return data.products;
};
