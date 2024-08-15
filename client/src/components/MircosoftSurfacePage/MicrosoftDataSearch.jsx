import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, InputAdornment } from '@mui/material';
import './MicrosoftSurfaceRep.scss';

import BatteryImage from '../../assets/battery-image.png';
import ScreenImage from '../../assets/screen-image.png'; 
import ModelImage from '../../assets/model-image.png'; 



const data = [
  { id: 1, model: 'Surface Pro 9', batteryReplacement: 'NA', screenReplacement: '$600' },
  { id: 2, model: 'Surface Pro 8', batteryReplacement: 'NA', screenReplacement: '$600' },
  { id: 3, model: 'Surface Laptop 4', batteryReplacement: 'NA', screenReplacement: '$500' },
  { id: 4, model: 'Surface Laptop 3', batteryReplacement: 'NA', screenReplacement: '$500' },
  { id: 5, model: 'Surface Laptop 2', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 6, model: 'Surface Laptop 1', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 7, model: 'Surface Pro X', batteryReplacement: '$350', screenReplacement: '$550' },
  { id: 8, model: 'Surface Go 1', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 9, model: 'Surface Go 2', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 10, model: 'Surface Book 1', batteryReplacement: '$350', screenReplacement: '$400' },
  { id: 11, model: 'Surface Book 2', batteryReplacement: '$350', screenReplacement: '$400' },
  { id: 12, model: 'Surface Book 3', batteryReplacement: '$350', screenReplacement: '$400' },
  { id: 13, model: 'Surface Pro 7', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 14, model: 'Surface Pro 7 Plus', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 15, model: 'Surface Pro 6', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 16, model: 'Surface Pro 5', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 17, model: 'Surface Pro 4', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 18, model: 'Surface Pro 3', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 19, model: 'Surface Pro 2', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 20, model: 'Surface 1', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 21, model: 'Surface 2', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 22, model: 'Surface 3', batteryReplacement: '$350', screenReplacement: '$350' },
  { id: 23, model: 'Surface RT', batteryReplacement: '$350', screenReplacement: '$350' },

];

const columns = [
  {
    field: 'model',
    headerName: 'Microsoft Surface Model',
    width: 379.8,
    headerClassName: 'Microsoft-custom-header',
    cellClassName: 'Microsoft-custom-cell',
    renderHeader: () => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={ModelImage} alt="Model" style={{ marginRight: 5, height: 40 }} />
        Microsoft Surface Model
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
    headerClassName: 'Microsoft-custom-header',
    cellClassName: 'Microsoft-custom-cell',
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
    headerClassName: 'Microsoft-custom-header',
    cellClassName: 'Microsoft-custom-cell',
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
    <div className='Microsoft-pricing-container'>
    <Box className="Microsoft-container">
      <Box className="Microsoft-table-header">
        <TextField
          variant="outlined"
          size='small'
          placeholder="Search"
          value={searchText}
          onChange={handleSearch}
          className="Microsoft-custom-text-filter"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <i className="fas fa-search"></i>
              </InputAdornment>
            ),
            classes: {
              notchedOutline: 'Microsoft-custom-text-field',
              input: 'Microsoft-custom-text-input',
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

