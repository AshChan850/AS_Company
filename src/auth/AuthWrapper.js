import React, {createContext, useState} from 'react';
import Pool from "../Components/UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";


export const AccountContext = createContext();

function AuthWrapper(props) {
    const [userName, setuserName] = useState("")
    const [authResponse,setauthResponse] = useState({});

    const getSession= ()=>{
        return new Promise((resolve,reject)=>{
            const user = Pool.getCurrentUser();
            // console.log(user);
            if(user){
                user.getSession((err,session)=>{
                    if(err){
                        reject(err); 
                    }
                    else{
                        resolve(session);
                    }
                })
            }
            else{
                reject();
            }
        })
    }

    const authenticate = (Username, Password)=>{
        setuserName(Username);
        return new Promise((resolve,reject)=>{
            const userdetails = new CognitoUser({
                Username,
                Pool
            })
            const authDetails = new AuthenticationDetails({
                Username,
                Password
            })
        
            userdetails.authenticateUser(authDetails, {
                onSuccess: (data)=>{
                    console.log("On Success: ",data);
                    setauthResponse(data);
                    resolve(data)
                },
                onFailure: (err)=>{
                    console.log("Error: ",err);
                    reject(err);
                },
                newPasswordRequired: (data)=>{
                    console.log("New Password: ",data);
                    resolve(data);
                }
            })
        })
    }


    const logout = ()=>{
        const user = Pool.getCurrentUser();
        if(user){
            setauthResponse({});
            setuserName("");
            user.signOut();
        }
    }


  return (
    <AccountContext.Provider value={{authenticate, userName, authResponse, getSession, logout}}>
    {props.children}
    </AccountContext.Provider>
  )
}

export default AuthWrapper