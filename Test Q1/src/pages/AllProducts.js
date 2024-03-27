
import * as React from 'react';
import { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';
import Grid from '@mui/material/Grid'; 
import ProductCard from '../components/ProductCard'; 
import Filters from '../components/Filters'; 
import Pagination from '../components/Pagination'; 

function AllProducts() {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const loadData = async () => {
     
      const response = await fetchProducts();
      setProducts(response.data); 
    };

    loadData();
  }, []);

  return (
    <div>
      <Filters  />
      <Grid container spacing={2}> 
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}> 
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Pagination  /> 
    </div>
  );
}

export default AllProducts; 
