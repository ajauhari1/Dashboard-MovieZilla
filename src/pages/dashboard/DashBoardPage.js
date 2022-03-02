import React from 'react'

import {AppBar} from './../../components/appbar'
import {SideBar} from './../../components/sidebar'
import {Panels} from './../../components/panels'
 function DashBoardPage  (props){
     return( 
         <>
          <AppBar/>
          <div className='containerMain'>
            <SideBar/>
            <Panels/>
          </div>
         
         </>
         
     )
 }
 
 export default DashBoardPage 