import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Reviews from "./Reviews";
// import logo192 from '../../public/logo192.png'
function ProductPage() {
  const [product, setProduct] = useState({
    products: {
      _id: "1",
      title: "Nike Shoes",
      src: "./logo192.png",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 23,
      colors: ["red", "black", "crimson", "teal"],
      count: 1,
    },
  });

  return (
    <div>
      <Typography variant="h3">{product.products.title}</Typography>
      <div style={styles.image}>
        <div style={{ height: 400 }}>
          <img src={product.products.src} style={{ width: "100%" }} alt="na" />
        </div>
        <Box sx={{ width: "90%", marginLeft: 10 }}>
          <Typography variant="h4">{product.products.description}</Typography>
          <Typography variant="h5">{product.products.content}</Typography>
        </Box>
      </div>
      <Reviews product={product}/>
    </div>
  );
}

export default ProductPage;

const styles = {
  details: {
    flex: 1,
    marginTop: 5,
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  paper: {
    padding: 20,
    height: "70vh",
    width: "70%",
    margin: 20,
  },
  image: {
    display: "flex",
    alignSelf: "flex-start",
  },
};
