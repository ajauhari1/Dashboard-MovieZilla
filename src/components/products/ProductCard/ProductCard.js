import React from 'react';

import {CardContainer,CardImageContainer, CardImage,CardInfoContainer,CardInfo,CardButtonContainer,CardButton } from './styles'

function ProductCard ({children, product, ...props})  {
  const {productName, productPrice, productDescription, imageUrl} = {...product};
  return (
    <CardContainer>
    <CardImageContainer>
      <CardImage src={imageUrl} alt={productName}/>
    </CardImageContainer>
    <CardInfoContainer>
      <CardInfo>{productName}</CardInfo>
      <CardInfo>{productPrice}</CardInfo>
      <CardInfo>{productDescription}</CardInfo>
    </CardInfoContainer>
    <CardButtonContainer>
      <CardButton>More Info</CardButton>
      <CardButton>Availability</CardButton>
    </CardButtonContainer>
  </CardContainer>
  )
}

export default ProductCard