import React, { useEffect, useState } from 'react'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import './RatingStars.scss'

function RatingStars(props) {

    const [stars, setStars] = useState([])
    const [rating, setRating] = useState(0)
    // props.changeRating(rating)


    useEffect(() => {
        setStars((prev)=>{return []})
      for (let i=1;i<=rating;i++)
      {
        setStars((prev)=>{
            return [...prev, {iconStyle:StarOutlinedIcon, empty: false}];
        })
    }
    for (let i=rating+1;i<=5;i++)
    {
        setStars((prev)=>{
            return [...prev, {iconStyle:StarOutlineOutlinedIcon, empty:true}];
        })
      }
    props.changeRating(rating)

    }, [rating])
    

  return (
    <>
    <div>

    {stars.map((star, idx)=>{
        return(
            <star.iconStyle onClick = {()=>{setRating(idx+1)}} className = {`star-${star.empty? 'empty' : 'filled'}`} />
        )
    })}
    </div>
    </>
  )
}

export default RatingStars
