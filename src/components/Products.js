import React from "react";
import { Box, Card, CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: "300px",
    height: "400px",
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
        </Card>
      ))}
    </Box>
  );
}

export default Products;
