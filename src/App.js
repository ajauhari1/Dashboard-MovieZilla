import { AddProductPanel, AllProductsPanel, EditProductPanel } from "components/panels"
import React from 'react';

import {Routes, Route} from "react-router-dom"

import {LoginPage, DashBoardPage, PageNotFound} from './pages'

function App() {

  return (
      <>
        <Routes>
           <Route path="/"  element={<LoginPage/>}/>
           <Route path="dashboard" element={<DashBoardPage/>} >
                <Route index element={<AllProductsPanel title="All Products"/>}/>
                <Route path="add" element={<AddProductPanel title="Add New Product "/>}/>
                <Route path="edit" element={<EditProductPanel title="Edit Product "/>}/>
            </Route>
        
           <Route path="*"  element={<PageNotFound/>}/>
         </Routes>
      </>
  );
}

export default App;