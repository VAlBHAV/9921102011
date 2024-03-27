
import * as React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetail';


const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div>
      {}

      <ProductDetails productId={productId} />
    </div>
  );
};

export default ProductPage;
