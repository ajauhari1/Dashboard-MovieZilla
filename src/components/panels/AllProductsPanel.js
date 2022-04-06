import React from "react";

import {PanelStyles, PanelBody, PanelHeader} from './styles'

///
import { ProductCard } from 'components/products/ProductCard';
import { useGetAllProducts } from 'hooks/useGetAllProducts';
///
 
function AllProductsPanel({ title, ...props }) {

  const productData = useGetAllProducts()
  return (
        <PanelStyles>
          <PanelHeader>
             <h2>{title  || "Display Panel"}</h2>
          </PanelHeader>
          <PanelBody>


          {productData? productData.map(product=> <ProductCard key={product.uid} product={product}/>) : null }


          </PanelBody>
        </PanelStyles>
  );
}

export default AllProductsPanel;