import React from 'react';

import {ProductDataEntryFormStyles, ProductDescription, ProductImage, ProductName, ProductPrice} from './styles';
import {Label, Input} from 'ui/forms';
import { TextArea } from 'ui/forms/textarea';
import {ProductImageDropBox} from '../ProductImageDropBox';

function ProductDataEntryForm ({children, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
          <ProductImage>
            <Label>Product Image</Label>
            <ProductImageDropBox/>
          </ProductImage>
        <fieldset>
            <ProductName>
            <Label>Product Name</Label>
              <Input/>
            </ProductName>

            <ProductPrice>
            <Label>Product Price</Label>
            <Input/>
            </ProductPrice>
          </fieldset>
          <ProductDescription>
          <Label>Product Description</Label>
            <TextArea rows={6}/>
          </ProductDescription>

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm