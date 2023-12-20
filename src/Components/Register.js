import React, { useRef, useState, useEffect, useContext } from "react";
import { Button, Grid, Paper, TextField } from "@mui/material";
import SignUpLoginButton from "./SignUpLoginButton";
import UserRadioButton from "./UserRadioButton";
import UserPool from "./UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import {AccountContext} from "../auth/AuthWrapper"
import { useNavigate } from "react-router-dom";



const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{4,24}$/;
function Register() {
  const userRef = useRef();
  const errref = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [showLogin, setshowLogin] = useState(false);
  const [userType, setUserType] = useState("User")

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  //   useEffect(() => {
  //       userRef.current.focus();
  //   }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  const handleRegisterSubmit = () => {
    console.log("User: ", user);
    console.log("Password: ", pwd);
    console.log("Pressed Submit");
    if (validMatch) {
      UserPool.signUp(user, pwd, [], null, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log(data);
      });
    }
    else{
        console.log("Passwords didn't match")
    }
  };

  const {authenticate, getSession} = useContext(AccountContext);
  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    authenticate(user, pwd)
    .then((res)=>{
        console.log("Logged in:",res);
        navigate("/");
    })
    .catch((err)=>{
        console.log(err);
    })
  };

  const LoginLayout = () => {
    return (
      <>
        <TextField
          label="Username"
          placeholder="Username"
          margin="normal"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Password"
          margin="normal"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={styles.button}
          size="large"
          onClick={handleLoginSubmit}
          fullWidth
        >
          Login
        </Button>
      </>
    );
  };

  const signUpLayout = () => {
    return (
      <>
        <TextField
          label="Username"
          placeholder="Username"
          margin="normal"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          fullWidth
          required
        />
        <TextField
          label="Email"
          placeholder="Email"
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          fullWidth
        //   required
        />
        <TextField
          label="Password"
          placeholder="Password"
          type="password"
          margin="normal"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
          fullWidth
          required
        />
        <TextField
          label="Confirm Password"
          placeholder="Confirm Password"
          margin="normal"
          value={matchPwd}
          onChange={(e) => {
            setMatchPwd(e.target.value);
          }}
          fullWidth
        //   required
        />
        <UserRadioButton userType={userType} setUserType={setUserType}/>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={styles.button}
          size="large"
          onClick={handleRegisterSubmit}
          fullWidth
        >
          Register
        </Button>
      </>
    );
  };

  const pageLayout = () => {
    if (showLogin) return LoginLayout();
    else return signUpLayout();
  };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={styles.paper}>
          <SignUpLoginButton setshowLogin={setshowLogin} />
          {pageLayout()}
        </Paper>
      </Grid>
    </div>
  );
}

export default Register;

const styles = {
  paper: {
    padding: 20,
    height: "auto",
    width: 400,
    margin: "30px auto",
  },
  button: {
    marginTop: 4,
    padding: 2,
  },
};
