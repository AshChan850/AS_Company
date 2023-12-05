import React, {useRef, useState, useEffect} from 'react'
import {Button, Grid, Paper, TextField, createTheme} from '@mui/material'
import { orange, amber } from '@mui/material/colors';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{4,24}$/;
function Register() {
    const userRef = useRef();
    const errref = useRef();


    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd, matchPwd])


    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])


    // useEffect(() => {
    //     setValidName(USER_REGEX.test(user));
    // }, [user])

    // useEffect(() => {
    //     setValidPwd(PWD_REGEX.test(pwd));
    //     setValidMatch(pwd === matchPwd);
    // }, [pwd, matchPwd])


  return (
    <div>
    <Grid>
        <Paper elevation ={10} style = {styles.paper}>
            <h2>
            Sign In
            </h2>
            <TextField label = "Username" placeholder = "Username" margin = "normal" fullWidth required/>
            <TextField label = "Password" placeholder = "Password" type="password" margin = "normal" fullWidth required/>
            <Button
            type = 'submit'
            color= 'primary'
            variant = "contained"
            sx = {styles.button}
            size = "large"
            fullWidth
            >
                Register
            </Button>
        </Paper>
    </Grid>
    </div>
  )
}

export default Register

const styles = {
    paper:{
        padding:20,
        height: '70vh',
        width: 400,
        margin: "30px auto"

    },
    button:{
        marginTop:4,
        padding:2
    }
}
// const theme = createTheme({
//     palette: {
//       primary: orange,
//       secondary: amber,
//     },
//   });
