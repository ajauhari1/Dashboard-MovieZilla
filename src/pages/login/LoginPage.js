import React from 'react'
import { useNavigate } from 'react-router-dom'

import {IoFilm } from 'react-icons/io5'


import {SectionLogin, LoginBox, LeftLoginBox, LeftContact, LeftFormInput, LeftFormButton, LeftSideTitle, RightLoginBox, RightTextBox, RightTextTop, RightTextBottom,LeftTextBottom} from './../../loginpage/design'

 function LoginPage  (props){

    let navigation = useNavigate()

    // JS
    function onHandleSubmit(e){
        e.preventDefault(); // prevents from refreshing 
        //Check inputs email and password
        //firebase auth signInWithEmailAndPassword
        //  True ---- Go to Dashboard
        //  False --- to to resubmit
        navigation('/dashboard') // pass the path 

    }
     return( 
         <>
       
              <SectionLogin>
                  <LoginBox>
                      <LeftLoginBox>
                      <IoFilm size="2.5rem" color="blue"/>
                      <LeftSideTitle>Welcome Back!</LeftSideTitle>
                      <LeftTextBottom>Please sign in below</LeftTextBottom>
                          <LeftContact>
                            <form onSubmit={onHandleSubmit}>
                              <LeftFormInput input type="text" required placeholder="EMAIL"/>
                              <LeftFormInput input type="text" required placeholder="PASSWORD"/>
                              <LeftFormButton>Sign In</LeftFormButton>
                              <LeftFormButton>Register</LeftFormButton>     
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