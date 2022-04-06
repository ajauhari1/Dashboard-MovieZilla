import React from 'react';

import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles';

function ProductPreview ({children, productName, productPrice, productDescription, productImage, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
          <ProductImage>
            <img src={productImage.previewImage} alt="movie spiderman" width="320" height="180"/>
          </ProductImage>
          <ProductName>{productName}</ProductName>
          <ProductPrice>${productPrice}</ProductPrice>
          <ProductDescription>
            {productDescription}
          </ProductDescription>

        </ProductPreviewStyles>
  )
}

export default ProductPreview