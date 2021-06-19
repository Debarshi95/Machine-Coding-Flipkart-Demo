import React from "react";
import {
  Box,
  Card,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: "300px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
  },

  img: {
    width: "100%",
    height: "100%",
    backgroundPosition: "initial",
  },
});
function Products({ products }) {
  const classes = useStyles();

  return (
    <Box
      flex={1}
      flexDirection="row"
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
    >
      {products?.map((product) => (
        <Card className={classes.card} key={product.id}>
          <CardMedia image={product.imgUrl} className={classes.img} />
          <CardContent>
            <Typography variant="h5">{product.name}</Typography>
            <Box display="flex">
              <Typography variant="h6" component="h6">
                Size :
              </Typography>{" "}
              {product.size.map((s, i) => (
                <Typography
                  key={i}
                  style={{ padding: "0 8px" }}
                  variant="h6"
                  component="h6"
                >
                  {s}
                </Typography>
              ))}
            </Box>
            <Typography variant="h5">Price : {product.price}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Products;
