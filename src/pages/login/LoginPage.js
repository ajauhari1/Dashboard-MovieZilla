import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {IoFilm } from 'react-icons/io5'
import { signInWithEmailAndPassword } from "firebase/auth";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {auth} from "./../../libs/firebase"
import {SectionLogin, LoginBox, LeftLoginBox, LeftContact, LeftFormInput, LeftFormButton, LeftSideTitle, RightLoginBox, RightTextBox, RightTextTop, RightTextBottom,LeftTextBottom} from './../../loginpage/design'

 function LoginPage  (props){
    const navigator = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const notify = (error) => toast.error(error.code,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined

    });

    function onLoginRequest(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential=>{
            navigator('/dashboard') 
        })
        .catch(error=>{
          // add toast messages
          notify(error)
        })
     
      }
     return( 
         <>
              <SectionLogin>
                  <LoginBox>
                      <ToastContainer/>
                      <LeftLoginBox>
                      <IoFilm size="2.5rem" color="blue"/>
                      <LeftSideTitle>Welcome Back to MovieZilla</LeftSideTitle>
                      <LeftTextBottom>Please SIGN IN below or REGISTER</LeftTextBottom>
                          <LeftContact>
                            <form onSubmit={onLoginRequest}>
                              <LeftFormInput id="email" type="text" placeholder="janedoe@gmail.com" onChange={(e)=> setEmail(e.target.value)}/>
                              <LeftFormInput id="password" type="text" placeholder="account password" onChange={(e)=>setPassword(e.target.value)} />
                              <LeftFormButton>Sign In</LeftFormButton>  
                            </form>
                          </LeftContact>
                      </LeftLoginBox>
                      <RightLoginBox>
                            <RightTextBox>
                                <RightTextTop>MOVIEZILLA STORE</RightTextTop>
                                <RightTextBottom>Your movie store with a zillion selection!</RightTextBottom>
                            </RightTextBox>
                      </RightLoginBox>
                          
                  </LoginBox>

              </SectionLogin>
         </>
     )
 }
 
 export default LoginPage 