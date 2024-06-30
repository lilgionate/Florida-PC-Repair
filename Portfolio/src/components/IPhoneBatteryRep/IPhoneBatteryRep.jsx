import './IPhoneBatteryRep.scss';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, InputAdornment } from '@mui/material';

import BatteryImage from '../../assets/battery-image.png';
import ModelImage from '../../assets/model-image.png'; 


const data = [
    { id: 1, model: '12 Pro Max', batteryReplacement: '$90' },
    { id: 2, model: '12 Pro', batteryReplacement: '$90' },
    { id: 3, model: '12 Plus', batteryReplacement: '$90', },
    { id: 4, model: '11 Pro Max', batteryReplacement: '$90', },
    { id: 5, model: '11 Pro', batteryReplacement: '$90', },
    { id: 6, model: '11', batteryReplacement: '$60', },
    { id: 7, model: 'XS Max', batteryReplacement: '$60', },
    { id: 8, model: 'XS', batteryReplacement: '$60' },
    { id: 9, model: 'XR', batteryReplacement: '$60' },
    { id: 10, model: 'X', batteryReplacement: '$60' },
    { id: 11, model: 'SE', batteryReplacement: '$60' },
    { id: 12, model: '8', batteryReplacement: '$50' },
    { id: 13, model: '8+', batteryReplacement: '$50' },
    { id: 14, model: '7', batteryReplacement: '$50' },
    { id: 15, model: '7+', batteryReplacement: '$50' },
    { id: 16, model: '6s', batteryReplacement: '$50' },
    { id: 17, model: '6s+', batteryReplacement: '$50' },
  ];
  
  const columns = [
    {
      field: 'model',
      headerName: 'iPhone Model',
      width: 375,
      headerClassName: 'IPhone-battery-custom-header',
      cellClassName: 'IPhone-battery-custom-cell',
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
      width: 374.4,
      headerClassName: 'IPhone-battery-custom-header',
      cellClassName: 'IPhone-battery-custom-cell',
      renderHeader: () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={BatteryImage} alt="Battery" style={{ marginRight: 5, height: 40 }} />
          Battery Replacement
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
        row.batteryReplacement.toLowerCase().includes(value)
      );
      setFilteredRows(filtered);
    };

  return (
    <div className="IPhone-battery-repair-info-container">
      <div className='IPhone-battery-repair-content'>
      <table className="IPhone-battery-repair-info-table">
        <tbody>
          <TableRow header="Issue:" content="No battery / drains fast" />
          <TableRow header="Causes:" content="Heavy usage / Defective" />
          <TableRow header="Solution:" content="Replace battery" />
          <TableRow header="Parts:" content="OEM" />
          <TableRow header="" content="" />
        </tbody>
      </table>
      <div className='IPhone-battery-pricing-container'>
    <Box className="IPhone-battery-container">
      <Box className="IPhone-battery-table-header">
        <TextField
          variant="outlined"
          size='small'
          placeholder="Search"
          value={searchText}
          onChange={handleSearch}
          className="IPhone-battery-text-filter"
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
              pagination: { paginationModel: { pageSize: 2 } },
            }}
            autoHeight
            disableSelectionOnClick
          />
    </Box>
    </div>
    <h2 className="Iphone-battery-repair-info-title">
        Battery Replacement Walk-in Service Support
    </h2>
      </div>
    </div>
  );
}

const TableRow = ({ header, content }) => {
  return (
    <tr className="IPhone-battery-repair-info-table-row">
      <td className="IPhone-battery-repair-info-table-header-cell">{header}</td>
      <td className="IPhone-battery-repair-info-table-cell">{content}</td>
    </tr>
  );
};

export default TableWithSearchAndPagination;
