import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, InputAdornment } from '@mui/material';
import './IPhoneScreenRep.scss';

import ScreenImage from '../../assets/screen-image.png'; 
import ModelImage from '../../assets/model-image.png'; 



const data = [
  { id: 1, model: '14 Pro Max', screenReplacement: 'Call for Pricing' },
  { id: 2, model: '14 Pro', screenReplacement: 'Call for Pricing' },
  { id: 3, model: '14 Plus', screenReplacement: 'Call for Pricing' },
  { id: 4, model: '13 Pro Max', screenReplacement: 'Call for Pricing' },
  { id: 5, model: '13 Pro', screenReplacement: 'Call for Pricing' },
  { id: 6, model: '13', screenReplacement: 'Call for Pricing' },
  { id: 7, model: '13 Mini', screenReplacement: 'Call for Pricing' },
  { id: 8, model: '12', screenReplacement: '$170' },
  { id: 9, model: '12 Mini', screenReplacement: '$170' },
  { id: 10, model: '12 Pro', screenReplacement: '$170' },
  { id: 11, model: '12 Max', screenReplacement: '$170' },
  { id: 12, model: '12 SE 2022', screenReplacement: '$170' },
  { id: 13, model: '11 Pro Max', screenReplacement: '$150' },
  { id: 14, model: '11 Pro', screenReplacement: '$120' },
  { id: 15, model: '11', screenReplacement: '$120' },
  { id: 16, model: 'XS Max', screenReplacement: '$100' },
  { id: 17, model: 'XS', screenReplacement: '$100' },
  { id: 18, model: 'XR', screenReplacement: '$100' },
  { id: 19, model: 'X', screenReplacement: '$100' },
  { id: 20, model: 'SE v1', screenReplacement: '$100' },
  { id: 21, model: 'SE v2', screenReplacement: '$100' },
];

const columns = [
  {
    field: 'model',
    headerName: 'iPhone Model',
    width:  375,
    headerClassName: 'IPhone-screen-custom-header',
    cellClassName: 'IPhone-screen-custom-cell',
    renderHeader: () => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={ModelImage} alt="Model" style={{ marginRight: 5, height: 40 }} />
        iPhone Model
      </div>
    ),
    renderCell: (params) => (
      <div style={{ fontWeight: 700, color: '#333' }}>
        {params.value}
      </div>
    ),
  },
  {
    field: 'screenReplacement',
    headerName: 'Screen Replacement',
    width:  374.4,
    headerClassName: 'IPhone-screen-custom-header',
    cellClassName: 'IPhone-screen-custom-cell',
    renderHeader: () => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={ScreenImage} alt="Screen" style={{ marginRight: 5, height: 43 }} />
        Screen Replacement
      </div>
    ),
  },
];

const TableWithSearchAndPagination = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRows, setFilteredRows] = useState(data);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);

    const filtered = data.filter(row => 
      row.model.toLowerCase().includes(value) ||
      row.screenReplacement.toLowerCase().includes(value)
    );
    setFilteredRows(filtered);
  };

  return (
    <div className="IPhone-screen-repair-info-container">
        <div className='IPhone-screen-repair-content'>
            <p className="IPhone-screen-Des">
               <span className='IPhone-screen-DesBold-I'>Best iPhone repair in FL! </span>  
               Bring your iPhone to our Florida iPhone repair shop. Experience perfection – 
               qualified iPhone techs, and guaranteed service.
            </p>
            <p className="IPhone-screen-Des">
               <span className='IPhone-screen-DesBold'>Transparent Disclaimer: </span> 
               Since our parts are not barcoded by Apple, screen  
               will work fine, but will show a persistent message that part is not genuine 
               or unknown.
            </p>
            <p className="IPhone-screen-Des">
                Why? Our parts are OEM, meaning they are coming from the same factories as Apple, but the parts are not serialized through the Apple network. As such,  you will receive an authenticity message after replacement. 
            </p>
            <p className="IPhone-screen-Des">
                We’d rather you know upfront as most of our customers don’t care about this. But, some do.
            </p>
        <table className="IPhone-screen-repair-info-table">
            <tbody>
            <TableRow header="Issue:" content="Cracked front glass and / or broken LCD" />
            <TableRow header="Causes:" content="Drop, fall, impact, defective LCD / touch screen" />
            <TableRow header="Solution:" content="Replace iPhone full screen assembly" />
            <TableRow header="Parts:" content="OEM screen" />
            <TableRow />
            </tbody>
        </table>
        <div className='IPhone-screen-pricing-container'>
            <Box className="IPhone-screen-container">
            <Box className="IPhone-screen-table-header">
                <TextField
                variant="outlined"
                size='small'
                placeholder="Search"
                value={searchText}
                onChange={handleSearch}
                className="IPhone-screen-text-filter"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <i class="fas fa-search"></i>
                    </InputAdornment>
                    ),
                    classes: {
                    notchedOutline: 'IPhone-screen-custom-text-field',
                    input: 'IPhone-screen-custom-text-input',
                    },
                }}
                />
            </Box>
            <DataGrid
                rows={filteredRows}
                columns={columns}
                initialState={{
                ...data.initialState,
                pagination: { paginationModel: { pageSize: 2 } },
                }}
                autoHeight
                disableSelectionOnClick
            />
        </Box>
        </div>
            <h2 className="IPhone-screen-repair-info-title">
            iPhone Repair Service in Florida
            </h2>
        </div>
</div>
  );
};

const TableRow = ({ header, content }) => {
    return (
      <tr className="IPhone-screen-repair-info-table-row">
        <td className="IPhone-screen-repair-info-table-header-cell">{header}</td>
        <td className="IPhone-screen-repair-info-table-cell">{content}</td>
      </tr>
    );
  };

export default TableWithSearchAndPagination;

