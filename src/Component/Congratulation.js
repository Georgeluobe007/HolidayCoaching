import React,{useContext} from 'react'
import {usertAuth} from '../WorkinContext/CreateContext'
import { Link } from 'react-router-dom'
import '../App.css'
function Congratulation() {
 
    const {authState} = useContext(usertAuth)
  return (
    <div className='squre-center'>
        
        <div className='squre'>
        <span className='span-work'>
              Congratulations <span className='name-phone'>{authState.surname}</span>,  
              we will get in touch with you on this mobile Number {authState.phone},
                and we will let you know our terms and fees for the tutorial.
                   #UncleGeorgeAndICanCode!!!
                   
          </span>
          <Link className='go-back' to="/">Go back</Link>
        </div>
       
    </div>
  )
}

export default Congratulation