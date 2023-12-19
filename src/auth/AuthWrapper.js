import React, {createContext} from 'react'


const AccountContext = createContext();

function AuthWrapper() {

    const authenticate = ()=>{
        
    }


  return (
    <AccountContext.Provider>

    </AccountContext.Provider>
  )
}

export default AuthWrapper