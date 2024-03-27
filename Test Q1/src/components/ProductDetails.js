import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProductDetails } from '../utils/api';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true); 
      try {
        const response = await fetchProductDetails(productId);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        setError(err); 
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }

  if (!product) {
    return <div>Product not found</div>; 
  }


  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <img src="https://picsum.photos/300" alt={product.name} width="100%" /> 
        {/* Replace with image display logic */}
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="body1">
          {product.company} - {product.category}
        </Typography>
        <Typography variant="h5">Price: ${product.price}</Typography>
        <Rating value={product.rating} precision={0.5} readOnly /> 
        <Typography variant="body1">
          Description: {product.description} 
          {}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
