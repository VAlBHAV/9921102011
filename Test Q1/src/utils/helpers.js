export const generateUniqueId = (products) => {

    const existingIds = products.map(product => product.id); 
    let newId = 1;
  
    while (existingIds.includes(newId)) {
      newId++;
    }
  
    return newId; 
  };
  
  export const formatPrice = (price) => {
    return `$${price.toFixed(2)}`; 
  };
  
  export const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice === 0 || discountedPrice >= originalPrice) return 0;
  
    const discount = (originalPrice - discountedPrice) / originalPrice * 100;
    return discount.toFixed(0); 
  };
  