import * as React from 'react';
import Pagination from '@mui/material/Pagination';

function CustomPagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (event, newPage) => {
    onPageChange(newPage);
  };

  return (
    <Pagination 
        count={totalPages} 
        page={currentPage} 
        onChange={handlePageChange} 
        showFirstButton
        showLastButton
    />
  );
}

export default CustomPagination;
