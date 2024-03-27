
import * as React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';


const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div>
      {}

      <ProductDetail productId={productId} />
    </div>
  );
};

export default ProductPage;
