import React from "react";
import {
  Box,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  Slider,
} from "@material-ui/core";

function Sidebar({ handleFilter, clearFilters }) {
  const handleCheckChange = (e) => {
    if (e.target.checked) {
      handleFilter(e.target.name, e.target.value);
    } else {
      handleFilter(null);
    }
  };
  return (
    <Box
      width="340px"
      padding="2rem 1.5rem"
      height="100vh"
      position="sticky"
      top={0}
    >
      <Typography component="h5" variant="h5">
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
        <div>
          <Typography id="discrete-slider-custom" gutterBottom>
            Custom marks
          </Typography>
          <Slider
            defaultValue={399}
            getAriaValueText={""}
            aria-labelledby="discrete-slider-custom"
            step={10}
            valueLabelDisplay="auto"
            marks={""}
          />
        </div>
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
