import './IPadBatteryRep.scss';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, InputAdornment } from '@mui/material';

import BatteryImage from '../../assets/battery-image.png';
import ModelImage from '../../assets/model-image.png'; 
import iPadBattery from '../../assets/iPad_battery.png';


const data = [
    { id: 1, model: 'Pro 12.9 Gen4', batteryReplacement: '$125' },
    { id: 2, model: 'Pro 12.9 Gen3', batteryReplacement: '$125' },
    { id: 3, model: 'Pro 12.9 Gen2', batteryReplacement: '$125', },
    { id: 4, model: 'Pro 12.9 Gen1', batteryReplacement: '$125', },
    { id: 5, model: 'Pro 11 Gen1', batteryReplacement: '$125', },
    { id: 6, model: 'Pro 11 Gen2', batteryReplacement: '$125', },
    { id: 7, model: 'Pro 10.5', batteryReplacement: '$125', },
    { id: 8, model: 'Pro 9.7', batteryReplacement: '$125' },
    { id: 9, model: 'Air 3', batteryReplacement: '$125' },
    { id: 10, model: 'Air 2', batteryReplacement: '$125' },
    { id: 11, model: 'Air 1', batteryReplacement: '$125' },
    { id: 12, model: 'Mini 5', batteryReplacement: '$125' },
    { id: 13, model: 'Mini 4', batteryReplacement: '$125' },
    { id: 14, model: 'Mini 3', batteryReplacement: '$125' },
    { id: 15, model: 'Mini 2', batteryReplacement: '$125' },
    { id: 16, model: 'Mini 1', batteryReplacement: '$125' },
    { id: 17, model: 'iPad 8', batteryReplacement: '$125' },
    { id: 18, model: 'iPad 7', batteryReplacement: '$125' },
    { id: 19, model: 'iPad 6', batteryReplacement: '$125' },
  ];
  
  const columns = [
    {
      field: 'model',
      headerName: 'iPad Model',
      width: 375,
      headerClassName: 'IPad-battery-custom-header',
      cellClassName: 'IPad-battery-custom-cell',
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
      width: 374.4,
      headerClassName: 'IPad-battery-custom-header',
      cellClassName: 'IPad-battery-custom-cell',
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
    <div className="IPad-battery-repair-info-container">
      <div className='IPad-battery-repair-content'>
      <table className="IPad-battery-repair-info-table">
        <tbody>
          <TableRow header="Issue:" content="Battery runs out fast or doesn’t work" />
          <TableRow header="Causes:" content="Constant usage and impact" />
          <TableRow header="Solution:" content="Replace battery" />
          <TableRow header="Parts:" content="Only original and brand new" />
          <TableRow header="Repair time:" content="1-3 days" />
          <TableRow header="Warranty:" content="30 days" />
        </tbody>
      </table>
      <div className='IPad-battery-img-container'>
        <img src={iPadBattery} alt="ipad battery" className='IPad-battery-img' />
      </div>
      <div className='IPad-battery-pricing-container'>
    <Box className="IPad-battery-container">
      <Box className="IPad-battery-table-header">
        <TextField
          variant="outlined"
          size='small'
          placeholder="Search"
          value={searchText}
          onChange={handleSearch}
          className="IPad-battery-text-filter"
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
        <p className="IPad-screen-repair-info-text">
            Batteries do fail over time with iPads. Yes, it’s a long-lasting 
            battery, but these batteries do degrade the more you use 
            your iPad. We will replace your iPad and ensure it is able 
            to get the same battery life as when you first bought it. 
            Don’t worry about charging your iPad 
            repeatedly. Instead, get an instant iPad battery refresh.
        </p>
      </div>
    </div>
  );
}

const TableRow = ({ header, content }) => {
  return (
    <tr className="IPad-battery-repair-info-table-row">
      <td className="IPad-battery-repair-info-table-header-cell">{header}</td>
      <td className="IPad-battery-repair-info-table-cell">{content}</td>
    </tr>
  );
};

export default TableWithSearchAndPagination;
