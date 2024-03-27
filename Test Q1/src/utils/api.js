
import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test/register'; 
const ACCESS_CODE = 'zpKKbc';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${ACCESS_CODE}`
  }
});

export const fetchProducts = (category, company, priceRange, rating, availability, page, limit) => {
  const params = {
    category,
    company,
    priceRange,
    rating,
    availability, 
    page,
    limit 
  };

  return api.get('/products', { params });
};

export const fetchProductDetails = (productId) => {
  return api.get(`/products/${productId}`);
};
