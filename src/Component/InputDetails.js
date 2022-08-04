import React,{useState,useContext} from 'react'
import '../App.css'
import * as Yup from 'yup';
import Axios from "axios"
import {Formik,Form,Field,ErrorMessage} from "formik"
import { useNavigate } from "react-router-dom";
import {usertAuth} from "../WorkinContext/CreateContext"
function InputDetails() {

 
 const {authState,setAuthState} = useContext(usertAuth);

 let navigation = useNavigate();

 const initialValue = {
  surname: "",
  name: "",
  phone: ""
 }
 const validationSchema = Yup.object().shape({
   surname: Yup.string().min(4).required(),
   name: Yup.string().required(),
   phone: Yup.string().min(10).max(10).required()
})
 const onSubmit = (data) => {
    Axios.post("http://localhost:3001/studentInfo/register", data).then((response) => {
          if(response.data.error){
            setAuthState({error:response.data.error})
          }else{
            setAuthState({
              surname:response.data.userSurname,
              name: response.data.userName,
              phone: response.data.userphone
            });
            navigation("/congratulations")
          }
    })
 }
  return (

    <div className='spint-page'>
 <div id='slider'>
      <figure>
        <img src='lil-children-can-code/blackscooding.jpg'/>
        <img src='lil-children-can-code/boycooding.jpg '/>
        <img src='lil-children-can-code/studentClass.jpg' />
        <img src='lil-children-can-code/childcooding.jpg' />
        <img src='lil-children-can-code/blackscooding.jpg' />
      </figure>
 </div >
 <div id='formik-input'>
    <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <div className='error-design'>
          <div className='label-field'>
          <label>Surname:</label>
        <Field 
        className="field"
        name="surname"
        autoComplete='off'
        id="surname"/>
        </div>
        <div><ErrorMessage name='surname' component='span'/></div>
        </div>
        <div className='error-design'>
          <div className='label-field'>
          <label>Name:</label>
        <Field 
        className="field"
        name="name"
        autoComplete='off'
        id="name"/>
        </div>
        <div><ErrorMessage name='name' component='span'/></div>
        </div>
        <div className='error-design'>
          <div className='label-field'>
          <label>Phone Number:</label>
        <Field 
        className="field"
        name="phone"
        autoComplete='off'
        id="phone"
        type="number"/>
        </div>
        <div><ErrorMessage name='phone' component='span'/></div>
        </div>
        <div><button type='submit'>Register</button></div>
      </Form>
    </Formik>
    </div>
      {! authState ? (
      <></>
      ):(
        <>
       <h3 style={{color:"red"}}>{authState.error}</h3>
        </>
      )}
    </div>
   
  )
}

export default InputDetails