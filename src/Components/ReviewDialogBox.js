import { Button, Modal, Paper, TextField, TextareaAutosize, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import RatingStars from "./RatingStars";

function ReviewDialogBox(props) {
    const {open, setOpen} = props
//   const [open, setOpen] = useState(false);
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] =useState(0)

  return (
    <>
      {/* <Button
        variant="contained"
        sx={{ width: "20%" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        Click Me!!
      </Button> */}
      <Modal open={open} onClose={() => setOpen(false)} sx={styles.modal}>
        <Paper sx = {styles.modalContent}>
          <div style={{width:"100%"}}>
            <div style={{justifyContent:"center", textAlign:"center"}}>
              <Typography variant="h4" gutterbottom >
                {" "}
                Add Review
              </Typography>
            </div>
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
              <TextField
              onChange={(event)=>{setReviewText(event.target.value); console.log(reviewText)}}
               sx={{width:"100%", padding:2}} placeholder="Enter your review here.." fullwidth multiline/>
            </div>
            <div style={{ display:"flex", justifyContent: "space-between", marginLeft: 15}}>
                <RatingStars changeRating={(star)=>{setRating(star)}}/>
                <Button
                variant="contained"
                onClick={()=>setOpen(!open)}
                >
                    Submit
                </Button>
            </div>
          </div>
        </Paper>
      </Modal>
    </>
  );
}

export default ReviewDialogBox;

const styles = {
  modal: {
    position: "fixed",
    zIndex: "1300",
    // inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent:{
    padding: 2,
    width: '30vw'
  },
  textArea:{
    width: 200
  }
};
