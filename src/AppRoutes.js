import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './Components/ProductPage'
import {AccountContext} from './auth/AuthWrapper'
import Register from './Components/Register';

function AppRoutes() {

    const {getSession} = useContext(AccountContext);

    const authCheckHelper = async(component)=>{
        try{
            const user = await getSession();
            console.log(user);
            return user;
        }
        catch(err){
            return null;
        }
        // .then((res)=>{
        //     return res;
        // })
        // .catch((err)=>{
        //     console.log(err);
        //     return null;
        // })

    }

    const authCheck =  (component)=>{
        
        // const user = authCheckHelper(component);

        // console.log(user);
        const user=  getSession();
        // .then((res)=>{
        //     console.log(res)
        //     return res
        // }
        // )
        // .catch((err)=>{
        //     console.log(err);
        //     return null;
        // })
        console.log(user);
        if(user){
            return component
        }
        return <Register/>
    }

  return (
    <div>

        <Routes>
            <Route exact path ="/" element={authCheck(<ProductPage/>)} />
            <Route exact path = "/signup" element={authCheck(<Register/>)}/>
        </Routes>
    </div>
    
  )
}

export default AppRoutes