import "./App.css";
import React from "react";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import { Box } from "@material-ui/core";
import { filterProducts } from "./utils/filter";
function App() {
  const [products, setProducts] = React.useState(null);
  React.useEffect(() => {
    fetch("/assets/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const clearFilters = () => {
    fetch("/assets/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };
  const handleFilter = async (filterName, filterValue) => {
    const prod = await filterProducts(filterName, filterValue);
    setProducts(prod);
  };
  return (
    <div className="app">
      {/* {Navbar} */}
      <Box display="flex" height="100%">
        {products && (
          <>
            <Sidebar handleFilter={handleFilter} clearFilters={clearFilters} />
            <Products products={products} />
          </>
        )}
      </Box>
    </div>
  );
}

export default App;
