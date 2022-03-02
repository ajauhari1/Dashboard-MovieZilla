import React from 'react'
import { Link } from 'react-router-dom'
import {AppBar} from './../../components/appbar'
import {SideBar} from './../../components/sidebar'

 function DashBoardPage  (props){
     return( 
         <>
          <AppBar/>
          <SideBar/>
         </>
         
     )
 }
 
 export default DashBoardPage 