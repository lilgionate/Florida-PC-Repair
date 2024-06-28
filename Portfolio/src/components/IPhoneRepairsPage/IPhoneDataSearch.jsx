import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, InputAdornment } from '@mui/material';
import './IPhoneRepairs.scss';

import BatteryImage from '../../assets/battery-image.png';
import ScreenImage from '../../assets/screen-image.png'; 
import ModelImage from '../../assets/model-image.png'; 



const data = [
  { id: 1, model: '14 Pro Max', batteryReplacement: 'Call for Pricing', screenReplacement: 'Call for Pricing' },
  { id: 2, model: '14 Pro', batteryReplacement: 'Call for Pricing', screenReplacement: 'Call for Pricing' },
  { id: 3, model: '14 Plus', batteryReplacement: 'Call for Pricing', screenReplacement: 'Call for Pricing' },
  { id: 4, model: '13 Pro Max', batteryReplacement: 'Call for Pricing', screenReplacement: 'Call for Pricing' },
  { id: 5, model: '13 Pro', batteryReplacement: 'Call for Pricing', screenReplacement: 'Call for Pricing' },
  { id: 6, model: '13', batteryReplacement: 'Call for Pricing', screenReplacement: 'Call for Pricing' },
  { id: 7, model: '13 Mini', batteryReplacement: 'Call for Pricing', screenReplacement: 'Call for Pricing' },
  { id: 8, model: '12', batteryReplacement: '$80', screenReplacement: '$170' },
  { id: 9, model: '12 Mini', batteryReplacement: '$90', screenReplacement: '$170' },
  { id: 10, model: '12 Pro', batteryReplacement: '$90', screenReplacement: '$170' },
  { id: 11, model: '12 Max', batteryReplacement: '$90', screenReplacement: '$170' },
  { id: 12, model: '12 SE 2022', batteryReplacement: '$90', screenReplacement: '$170' },
  { id: 13, model: '11 Pro Max', batteryReplacement: '$90', screenReplacement: '$150' },
  { id: 14, model: '11 Pro', batteryReplacement: '$90', screenReplacement: '$120' },
  { id: 15, model: '11', batteryReplacement: '$80', screenReplacement: '$120' },
  { id: 16, model: 'XS Max', batteryReplacement: '$60', screenReplacement: '$100' },
  { id: 17, model: 'XS', batteryReplacement: '$60', screenReplacement: '$100' },
  { id: 18, model: 'XR', batteryReplacement: '$60', screenReplacement: '$100' },
  { id: 19, model: 'X', batteryReplacement: '$60', screenReplacement: '$100' },
  { id: 20, model: 'SE v1', batteryReplacement: '$60', screenReplacement: '$100' },
  { id: 21, model: 'SE v2', batteryReplacement: '$60', screenReplacement: '$100' },
];

const columns = [
  {
    field: 'model',
    headerName: 'iPhone Model',
    width: 379.2,
    headerClassName: 'custom-header',
    cellClassName: 'custom-cell',
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
    field: 'batteryReplacement',
    headerName: 'Battery Replacement',
    width: 379.2,
    headerClassName: 'custom-header',
    cellClassName: 'custom-cell',
    renderHeader: () => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={BatteryImage} alt="Battery" style={{ marginRight: 5, height: 40 }} />
        Battery Replacement
      </div>
    ),
  },
  {
    field: 'screenReplacement',
    headerName: 'Screen Replacement',
    width: 379,
    headerClassName: 'custom-header',
    cellClassName: 'custom-cell',
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
      row.batteryReplacement.toLowerCase().includes(value) ||
      row.screenReplacement.toLowerCase().includes(value)
    );
    setFilteredRows(filtered);
  };

  return (
    <div className='IPhone-pricing-container'>
    <Box className="IPhone-container">
      <Box className="table-header">
        <TextField
          variant="outlined"
          size='small'
          placeholder="Search"
          value={searchText}
          onChange={handleSearch}
          className="IPhone-custom-text-filter"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <i class="fas fa-search"></i>
              </InputAdornment>
            ),
            classes: {
              notchedOutline: 'custom-text-field',
              input: 'custom-text-input',
            },
          }}
        />
      </Box>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            initialState={{
              ...data.initialState,
              pagination: { paginationModel: { pageSize: 3 } },
            }}
            autoHeight
            disableSelectionOnClick
          />
    </Box>
    </div>
  );
};

export default TableWithSearchAndPagination;

