import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductOptionStyles = styled.ul`
   margin: 3rem 0 0;
   a{
       font-size:14px;
       color: white;
   }
`;

function ProductOptions  (props){
    return( 
        <>
      
        <ProductOptionStyles>
            <li>
                <Link to="/dashboard">View All Products</Link>
            </li>
            <li>
              <Link to="add">Add New Products</Link>
            </li>
        </ProductOptionStyles>
        </>
    )
}

export default ProductOptions 