import React, {useState} from 'react'

import { Link } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'libs/firebase'

import {Button} from './../../ui/buttons'
import {BodyError, ErrorDiv, Error, ErrorMessaage} from './../../404page/design'



 

 function PageNotFound  (props){
     const [isUser, setIsUser] = useState(false)

     onAuthStateChanged(auth, (user)=>{
         if(user){
             setIsUser(true)
         }else{
             setIsUser(false)
         }
     })

     return( 
         <>
            <BodyError>
                <ErrorDiv>
                    <Error>404ERROR</Error>
                    <ErrorMessaage>Sorry padawan you are far far away from our MovieZilla Store...</ErrorMessaage>
                    <Button>
                        {
                            isUser? <Link to='/dashboard'>Click Back to Dashboard</Link> : <Link to='/'>Click Back to Login</Link>
                        }
                    </Button>
                </ErrorDiv>
            </BodyError>
         </>
     )
 }
 
 export default PageNotFound 


