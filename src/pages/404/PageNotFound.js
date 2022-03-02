import React from 'react'
import { Link } from 'react-router-dom'

import {Button} from './../../ui/buttons'
import {BodyError, ErrorDiv, Error, ErrorMessaage} from './../../404page/design'
 

 function PageNotFound  (props){
     return( 
         <>
         <BodyError>
            <ErrorDiv>
                <Error>404ERROR</Error>
                <ErrorMessaage>Sorry padawan you are far far away from our MovieZilla Store...</ErrorMessaage>
                <Button>
                    <Link to="/dashboard">Click Back to Dashboard</Link>
                </Button>
            </ErrorDiv>
         </BodyError>
         </>
     )
 }
 
 export default PageNotFound 


