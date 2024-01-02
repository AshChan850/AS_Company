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
import React, { useEffect, useState } from "react";
import Reviews from "./Reviews";
import axiosClient from "../AxiosCodes/axios";
import NavBar from "./NavBar";
// import logo192 from '../../public/logo192.png'
function ProductPage() {
  // const [product, setProduct] = useState({
  //   products: {
  //     _id: "1",
  //     title: "Nike Shoes",
  //     src: "./logo192.png",
  //     description: "UI/UX designing, html css tutorials",
  //     content:
  //       "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
  //     price: 23,
  //     colors: ["red", "black", "crimson", "teal"],
  //     count: 1,
  //   },
  // });

  const [reviews, setReviews] = useState([{}]);
  const [product, setProduct] = useState({})
  // const reviews = useRef(second)
  

  useEffect(() => {
    // axiosClient.get("./reviews.json").then((res) => {
    //   setReviews(res.data);
    // });
    fetch("./products.json",{
      headers:{
        'Content-type': 'application/json',
        'Accept':'application/json'
      }
    })
    .then(async (res)=>{
      console.log(res);
      setProduct(await res.json());
    })
    // .then((res)=>{
    //   console.log(res);
    //   setProduct(res);
    // })
    .catch((err)=>{
      console.log(err);
    })


    fetch("./reviews.json",{
      headers:{
        'Content-type': 'application/json',
        'Accept':'application/json'
      }
    })
    .then(async (res)=>{
      console.log(res);
      setReviews(await res.json())
      // return res.json();
    })
    // .then((res)=>{
    //   console.log(res);
    //   setReviews(res);
    // })
    .catch((err)=>{
      console.log(err);
    })
  }, []);

// useEffect(() => {
//   console.log(reviews);

// }, [reviews])


  return (
    <div>
    <NavBar/>
      <Typography variant="h3" sx={styles.details}>{product.productName}</Typography>
      <div style={styles.image}>
        <div style={{ height: "60vh" }}>
          <img src={product.s3Link} style={{ width: "100%" }} alt="na" />
        </div>
        <Box sx={{ width: "90%", marginLeft: 10, height: "auto" }}>
          <Typography variant="h4">{product.productDes}</Typography>
          {/* <Typography variant="h5">{reviews[0].product_content}</Typography> */}
        </Box>
      </div>
      <Reviews reviews={reviews}/>
    </div>
  );
}

export default ProductPage;

const styles = {
  details: {
    flex: 1,
    marginTop: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginLeft: 2,
    
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
