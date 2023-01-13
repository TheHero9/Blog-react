import React, { Component } from 'react'
import { Route, Redirect, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

export default function PrivateRoute({component: Compoent, ...rest}) {

  //Go back to the main page
  const navigate = useNavigate()      
  const goback = () => {
      navigate('/register')
  }

    const {currentUser} = useAuth()

  return (
    <>
      <Route {...rest} render={props =>{
        return currentUser ? <Compoent {...props}/> : goback()
    }}>

        </Route>
    </>
  )
}