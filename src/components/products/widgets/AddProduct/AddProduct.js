import React, {useState} from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import { useAddNewProduct } from 'hooks/useAddNewProduct';
import {AddProductStyles} from './styles'
import {ProductEditor} from "components/products/ProductEditor";
import ProductPreview from 'assets/images/Spiderman.jpg'

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState('Spider Man')
  const [productPrice, setProductPrice] = useState('29.99')
  const [productDescription, setProductDescription] = useState('Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing.')
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [loading, productLoader] = useAddNewProduct();
  const formatter = useNumberFormat()

  function handleProductName (name){
    setProductName(name)
  }

  function handleProductPrice (price){
    setProductPrice(formatter(price))
  }
  
  function handleProductDescription (description){
    setProductDescription(description)
  }

  function handleSubmit (e) {
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDescription
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)

  }
  if(isWriting){
    return <h1>Editor Feedback components</h1>
  }else {
  return (
        <AddProductStyles  {...props}>
          <ProductEditor 
          productName={productName} 
          productPrice={productPrice} 
          productDescription={productDescription}
          productImage={productImage}

          handleProductName={handleProductName}
          handleProductPrice={handleProductPrice}
          handleProductDescription={handleProductDescription}
          setProductImage={setProductImage}
          handleSubmit={handleSubmit}
          />
        </AddProductStyles>
  )
  }
}

export default AddProduct