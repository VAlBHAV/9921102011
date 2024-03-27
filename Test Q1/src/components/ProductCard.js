
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; // For image display
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'; // For navigation

function ProductCard({ product }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="150"
        image="https://picsum.photos/200" 
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <Link to={`/product/${product.id}`}>{product.name}</Link> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.company} - {product.category}
        </Typography>
        <Typography variant="body1">
          Price: ${product.price}
        </Typography>
        <Rating value={product.rating} precision={0.5} readOnly /> 
        {}
      </CardContent>
    </Card>
  );
}

export default ProductCard; 
