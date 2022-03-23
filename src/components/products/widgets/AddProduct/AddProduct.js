import React, {useState} from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import {AddProductStyles} from './styles'
import {ProductEditor} from "components/products/ProductEditor";
import ProductPreview from 'assets/images/Spiderman.jpg'

function AddProduct ({children, ...props})  {
  const [productName, setProductName] = useState('Spider Man')
  const [productPrice, setProductPrice] = useState('29.99')
  const [productImage, setProductImage] = useState(ProductPreview)
  const formatter = useNumberFormat()

  function handleProductName (name){
    setProductName(name)
  }

  function handleProductPrice (price){
    setProductPrice(formatter(price))
  }

  return (
        <AddProductStyles  {...props}>
          <ProductEditor 
          productName={productName} 
          productPrice={productPrice} 
          productImage={productImage}
          handleProductName={handleProductName}
          handleProductPrice={handleProductPrice}
          setProductImage={setProductImage}
          />
        </AddProductStyles>
  )
}

export default AddProduct