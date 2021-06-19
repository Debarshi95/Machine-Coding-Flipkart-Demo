import React from "react";
import {
  Box,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";

import { filterProducts, sortProducts } from "../utils/filter";

function Sidebar({ products, setProducts }) {
  const [pricing, setPricing] = React.useState(2);
  const [checkBoxes, setCheckBoxes] = React.useState();

  const clearFilters = () => {
    fetch("/assets/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  const handlePricing = (order) => {
    setProducts(sortProducts(products, order));
  };
  const handleCheckChange = (e) => {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    setProducts(
      filterProducts(products, (item) => {
        if (itemName === "size") {
          return item.size.includes(itemValue);
        }
        return item[itemName] === itemValue;
      })
    );
  };

  const handleSortChange = (e) => {
    setPricing(e.target.value);
    handlePricing(e.target.value);
  };

  return (
    <Box
      width="340px"
      padding="2rem 1.5rem"
      height="100vh"
      position="sticky"
      top={0}
    >
      <Typography component="h5" variant="h5" gutterBottom>
        Filter
      </Typography>
      <Divider />
      <Box>
        <div>
          <Typography variant="h6" component="h6">
            Ideal For
          </Typography>
          <button onClick={clearFilters}>Clear</button>
        </div>
        <FormControlLabel
          control={
            <Checkbox
              name="idealFor"
              onChange={handleCheckChange}
              value="men"
            />
          }
          label="Men"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="idealFor"
              onChange={handleCheckChange}
              value="women"
            />
          }
          label="Women"
        />
      </Box>
      <Box>
        <InputLabel id="demo-simple-select-readonly-label">Pricing</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={pricing}
          onChange={handleSortChange}
        >
          <MenuItem value={2}>Select Pricing</MenuItem>
          <MenuItem value={1}>High To Low</MenuItem>
          <MenuItem value={0}>Low To High</MenuItem>
        </Select>
      </Box>
      <Box>
        <Typography variant="h6" component="h6">
          Brand
        </Typography>
        <FormControlLabel
          control={<Checkbox name="brand" value="Gucci" />}
          label="Gucci"
          onChange={handleCheckChange}
        />
        <FormControlLabel
          control={<Checkbox name="brand" value="Nike" />}
          label="Nike"
          onChange={handleCheckChange}
        />
        <FormControlLabel
          control={<Checkbox name="brand" value="ABC" />}
          label="ABC"
          onChange={handleCheckChange}
        />
      </Box>

      <Box>
        <Typography variant="h6" component="h6">
          Size
        </Typography>
        <FormControlLabel
          control={
            <Checkbox name="size" value="M" onChange={handleCheckChange} />
          }
          label="Medium"
          onChange={handleCheckChange}
        />
        <FormControlLabel
          control={
            <Checkbox name="size" value="L" onChange={handleCheckChange} />
          }
          label="Large"
          onChange={handleCheckChange}
        />
        <FormControlLabel
          control={
            <Checkbox name="size" value="S" onChange={handleCheckChange} />
          }
          label="Small"
          onChange={handleCheckChange}
        />
      </Box>
    </Box>
  );
}

export default Sidebar;
