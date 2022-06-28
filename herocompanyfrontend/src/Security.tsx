import React from 'react'
import { Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Result } from './models/ILogin'

function Security( item: { component: JSX.Element } ) {

  
   const control = () => {
    const stSession = sessionStorage.getItem("result")
    if ( stSession ) {
        try {

            const result:Result = JSON.parse( stSession )
            return result

        } catch (error) {
            sessionStorage.removeItem('result')
            return null
        }

    }else {
        return null
    }
   }
    //const bilControl = control();
    const resultcontrol=control();
  return (


    
    resultcontrol === null 
    ? 
        <Navigate to='/' />
    :
       <> <NavBar result={resultcontrol} /> {item.component} </> 
  )
}

export default Security
