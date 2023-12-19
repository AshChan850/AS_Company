import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

function SignUpLoginButton(props) {
    const {setshowLogin} = props

  return (
    <>
    <ButtonGroup variant='contained' color='primary' fullWidth>
    <Button onClick={()=>{setshowLogin(true)}}>Login</Button>
    <Button onClick={()=>{setshowLogin(false)}}>Sign Up</Button>
    </ButtonGroup>
    </>
  )
}

export default SignUpLoginButton