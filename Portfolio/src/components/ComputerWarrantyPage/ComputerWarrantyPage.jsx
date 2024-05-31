import React from 'react';

import ComputerWarrantyHeader from './ComputerWarrantyHeader';
import ComputerWarrantyPrice from './ComputerWarrantyPrice';
import ComputerExtras from './ComputerExtras';
import ComputerBrands from './ComputerBrands';



const ComputerWarrantyPage = () => {
  return (
   <>
    <ComputerWarrantyHeader />
    <ComputerWarrantyPrice />
    <ComputerExtras />
    <ComputerBrands />
   </>
  );
};

export default ComputerWarrantyPage;
