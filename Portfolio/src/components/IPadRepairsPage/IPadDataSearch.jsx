import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, InputAdornment } from '@mui/material';
import './IPadRepairs.scss';

import BatteryImage from '../../assets/battery-image.png';
import ScreenImage from '../../assets/screen-image.png'; 
import ModelImage from '../../assets/model-image.png'; 



const data = [
  { id: 1, model: 'Pro 12.9 Gen 6', batteryReplacement: '$125', screenReplacement: '$500' },
  { id: 2, model: 'Pro 12.9 Gen 5', batteryReplacement: '$125', screenReplacement: '$500' },
  { id: 3, model: 'Pro 12.9 Gen 4', batteryReplacement: '$125', screenReplacement: '$300' },
  { id: 4, model: 'Pro 12.9 Gen 3', batteryReplacement: '$125', screenReplacement: '$300' },
  { id: 5, model: 'Pro 12.9 Gen 2', batteryReplacement: '$125', screenReplacement: '$575' },
  { id: 6, model: 'Pro 12.9 Gen 1', batteryReplacement: '$125', screenReplacement: '$300' },
  { id: 7, model: 'Pro 11 Gen 1', batteryReplacement: '$125', screenReplacement: '$300' },
  { id: 8, model: 'Pro 11 Gen 2', batteryReplacement: '$125', screenReplacement: '$300' },
  { id: 9, model: 'Pro 11 Gen 3', batteryReplacement: '$125', screenReplacement: '$300' },
  { id: 10, model: 'Pro 11 Gen 4', batteryReplacement: '$125', screenReplacement: '$300' },
  { id: 11, model: 'Pro 10.5', batteryReplacement: '$125', screenReplacement: '$250' },
  { id: 12, model: 'Pro 9.7', batteryReplacement: '$125', screenReplacement: '$250' },
  { id: 13, model: 'iPad 5', batteryReplacement: '$125', screenReplacement: '$175' },
  { id: 14, model: 'iPad 6', batteryReplacement: '$125', screenReplacement: '$175' },
  { id: 15, model: 'iPad 7', batteryReplacement: '$125', screenReplacement: '$175' },
  { id: 16, model: 'iPad 8', batteryReplacement: '$125', screenReplacement: '$175' },
  { id: 17, model: 'iPad 9', batteryReplacement: '$125', screenReplacement: '$175' },
  { id: 18, model: 'iPad 10', batteryReplacement: '$125', screenReplacement: '$175' },
  { id: 19, model: 'iPad 2', batteryReplacement: '$125', screenReplacement: '$125' },
  { id: 20, model: 'iPad 3', batteryReplacement: '$125', screenReplacement: '$125' },
  { id: 21, model: 'iPad 4', batteryReplacement: '$125', screenReplacement: '$125' },
  { id: 22, model: 'iPad Air 1', batteryReplacement: '$125', screenReplacement: '$225' },
  { id: 23, model: 'iPad Air 2', batteryReplacement: '$125', screenReplacement: '$225' },
  { id: 24, model: 'iPad Air 3', batteryReplacement: '$125', screenReplacement: '$225' },
  { id: 25, model: 'iPad Air 4', batteryReplacement: '$125', screenReplacement: '$225' },
  { id: 26, model: 'iPad mini series', batteryReplacement: '$125', screenReplacement: 'Call for pricing' },

];

const columns = [
  {
    field: 'model',
    headerName: 'iPad Model',
    width: 379.8,
    headerClassName: 'custom-header',
    cellClassName: 'custom-cell',
    renderHeader: () => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={ModelImage} alt="Model" style={{ marginRight: 5, height: 40 }} />
        iPad Model
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
    width: 379.8,
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
    width: 379.8,
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

