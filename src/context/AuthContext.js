import React, {createContext, ReactNode, useEffect, useState} from 'react'
import api from '../services/api'

export const AuthContext = createContext({})



export const ContextProvider = ({children, ...rest}) => {
  const [user, setUser] = useState({obj:'oi'})
  const [img, setImg] = useState({obj:'oi'})

  async function login(email,username, imgUrl){
   const user = await  api.post('/session', {username, email})
   setUser(user.data)
   setImg(imgUrl)
   
    
  }

  return  <AuthContext.Provider value={{
    user,
    img,
    login,
       }}>
    {children}
  </AuthContext.Provider>
}

