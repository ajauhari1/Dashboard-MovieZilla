import React from 'react';

import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles';
import PlaceHolderImage from 'assets/images/Spiderman.jpg'

function ProductPreview ({children, productName, productPrice, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
          <ProductImage>
            <img src={PlaceHolderImage} alt="movie image"/>
          </ProductImage>
          <ProductName>{productName}</ProductName>
          <ProductPrice>${productPrice}</ProductPrice>
          <ProductDescription>
            Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU).
          </ProductDescription>

        </ProductPreviewStyles>
  )
}

export default ProductPreview