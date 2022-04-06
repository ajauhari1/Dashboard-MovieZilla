import React from 'react';

import {CardContainer,CardImageContainer, CardImage,CardInfoContainer,CardInfo,CardTitle,CardPrice,CardButtonContainer,CardButton } from './styles'

function ProductCard ({children, product, ...props})  {
  const {productName, productPrice, productDescription, imageUrl} = {...product};
  return (
    <CardContainer>
    <CardImageContainer>
      <CardImage src={imageUrl} alt={productName}/>
    </CardImageContainer>
    <CardInfoContainer>
      <CardTitle>{productName}</CardTitle>
      <CardPrice>${productPrice}</CardPrice>
      <CardInfo>{productDescription}</CardInfo>
    </CardInfoContainer>
    <CardButtonContainer>
      <CardButton>Edit</CardButton>
      <CardButton>Delete</CardButton>
    </CardButtonContainer>
  </CardContainer>
  )
}

export default ProductCard