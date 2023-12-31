import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axiosClient from "../AxiosCodes/axios";
import ReviewDialogBox from "./ReviewDialogBox";

function Reviews(props) {
  // let product = props.product;
  // const [reviews, setReviews] = useState();
  let reviews= props.reviews;
  const [open, setOpen] = useState(false)

  // useEffect(() => {
  //   // axiosClient.get("/reviews").then((res) => {
  //   //   setReviews(res.data);
  //   // });
  //   fetch("./reviews.txt")
  //   .then((res)=>{res.json()})
  //   .then((res)=>{
  //     setReviews(res[0]);
  //   })
  // }, []);

  return (
    <>
      <div style={{ height: 40, display: "flex", marginTop: 5, marginLeft: 25 }}>
        <Typography variant="h4" sx={{ marginRight: "50%" }}>
          Reviews
        </Typography>
      </div>
      <Grid>
        <Paper elevation={10} style={styles.paper}>
          {reviews.slice(0,5).map((review) => {
            return (
              <>
                <div style={{ display: "flex" }}>
                  <IconButton sx={{ p: 0, marginRight: 5 }}>
                    <Avatar
                      alt={review.user_id}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                  <Typography variant="h5">
                    {review.review_text}   
                  </Typography>
                </div>
                <Typography variant="h6" sx={{ marginLeft: 10 }}>
                  {review.rating}
                </Typography>
              </>
            );
          })}
        </Paper>
        </Grid>
   
      <div style={{ width: "75%", padding: 10, textAlign: "right" }}>
        <Button 
        variant="contained" 
        sx={{ width: "20%" }}
        onClick={()=>{
            setOpen(!open)
        }}
        >
          Add Review
        </Button>
      </div>
      <ReviewDialogBox open={open} setOpen={setOpen} />
    </>
  );
}

export default Reviews;

const styles = {
  details: {
    flex: 1,
    marginTop: 5,
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  paper: {
    padding: 20,
    height: "auto",
    width: "70%",
    margin: 20,
  },
  image: {
    display: "flex",
    alignSelf: "flex-start",
  },
  button: {
    display: "flex",
    alignItem: "flex-end",
    padding: 10,
  },
};
