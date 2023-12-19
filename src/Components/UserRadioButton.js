import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

function UserRadioButton(props) {
    const {userType,setUserType} = props;
   
  return (
    <>
        <FormControl>
            <FormLabel>Type of User:</FormLabel>
            <RadioGroup
            name="userType-Buttons"
            value={userType}
            onChange={(e)=>{setUserType(e.target.value)}}
            row
            sx={{justifyContent:"space-around", alignItems:"center"}}
            >
                <FormControlLabel value="User" control ={<Radio/>} label="User"/>
                <FormControlLabel value="Company" control ={<Radio/>} label="Company"/>

            </RadioGroup>
        </FormControl>
    </>
  )
}

export default UserRadioButton