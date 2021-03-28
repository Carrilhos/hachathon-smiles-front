import React, {createContext, ReactNode, useEffect, useState} from 'react'

export const AuthContext = createContext({})



export const ContextProvider = ({children, ...rest}) => {
  const [user, setUser] = useState({obj:'oi'})

  function login(email,username){
     // faz a request aquired
     // setUser(resposne)
  }

  return  <AuthContext.Provider value={{
    user,
    login,
       }}>
    {children}
  </AuthContext.Provider>
}

