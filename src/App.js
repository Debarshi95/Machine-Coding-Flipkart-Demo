import "./App.css";
import React from "react";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import { Box } from "@material-ui/core";

function App() {
  const [products, setProducts] = React.useState(null);
  React.useEffect(() => {
    fetch("/assets/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="app">
      {/* {Navbar} */}
      <Box display="flex" height="100%">
        {products && (
          <>
            <Sidebar products={products} setProducts={setProducts} />
            <Products products={products} />
          </>
        )}
      </Box>
    </div>
  );
}

export default App;
