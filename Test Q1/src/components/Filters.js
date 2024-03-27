
import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'; 
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';

function Filters({ 
    categories, 
    companies,  
    onCategoryChange, 
    onCompanyChange, 
    onPriceRangeChange,
    onRatingChange,
    onAvailabilityChange 
}) {
  const [priceMin, setPriceMin] = React.useState('');
  const [priceMax, setPriceMax] = React.useState('');
  const [selectedRating, setSelectedRating] = React.useState(0); 
  const [availability, setAvailability] = React.useState({
    inStock: true,
    outOfStock: false 
  });

  const handlePriceChange = (event) => {
    const value = event.target.value;
    if (event.target.name === 'priceMin') setPriceMin(value);
    if (event.target.name === 'priceMax') setPriceMax(value);

    onPriceRangeChange(value);
  };


  return (
    <div>
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Category</InputLabel> 
        <Select label="Category" onChange={onCategoryChange}> 
            <MenuItem value="">All</MenuItem>
            {categories.map(item => <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>)}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 150, ml: 2 }}> {/* Margin left */}
        <InputLabel>Company</InputLabel> 
        <Select label="Company" onChange={onCompanyChange}> 
           {}
        </Select>
      </FormControl>

      <FormControl sx={{ mt: 2 }}> {/* Margin top */}
        <TextField 
          label="Min Price"
          name="priceMin"
          value={priceMin}
          onChange={handlePriceChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField 
          label="Max Price"
          name="priceMax"
          value={priceMax}
          onChange={handlePriceChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </FormControl>

      {}
    </div>
  );
}

export default Filters; 
