import React from 'react'
import './ComputerWarrantyPage.scss'

// Import images
import toshiba from '../../assets/toshiba.png';
import sony from '../../assets/sony.png';
import samsung from '../../assets/samsung.png';
import intel from '../../assets/intel.png';
import ibm from '../../assets/ibm.png';
import hp from '../../assets/hp.png';
import hitachi from '../../assets/hitachi.png';
import apple from '../../assets/apple.png';
import asus from '../../assets/asus.png';
import fujitsu from '../../assets/fujitsu.png';

const brands = [
    toshiba, sony, samsung, intel, ibm, hp, hitachi,
    apple, asus, fujitsu,
];

export default function ComputerBrands() {
    
  return (
    <div className="computer-brand-container">
      <h2 className="computer-brand-heading">Brands We Work With</h2>
      <div className="computer-brand-grid">
        {brands.map((brand, index) => (
            <img key={index} src={`${brand}`} alt={brand} className="computer-brand-image" />
        ))}
      </div>
    </div>
  )
}
