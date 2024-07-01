import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, InputAdornment } from '@mui/material';
import './IPadScreenRep.scss';

import ScreenImage from '../../assets/screen-image.png'; 
import ModelImage from '../../assets/model-image.png'; 



const data = [
  { id: 1, model: 'Pro 12.9 Gen 6', screenReplacement: '$500' },
  { id: 2, model: 'Pro 12.9 Gen 5', screenReplacement: '$500' },
  { id: 3, model: 'Pro 12.9 Gen 4', screenReplacement: '$350' },
  { id: 4, model: 'Pro 12.9 Gen 3', screenReplacement: '$350' },
  { id: 5, model: 'Pro 12.9 Gen 2', screenReplacement: '$575' },
  { id: 6, model: 'Pro 12.9 Gen 1', screenReplacement: '$300' },
  { id: 7, model: 'Pro 11 Gen 4', screenReplacement: '$300' },
  { id: 8, model: 'Pro 11 Gen 3', screenReplacement: '$300' },
  { id: 9, model: 'Pro 11 Gen 2', screenReplacement: '$300' },
  { id: 10, model: 'Pro 11 Gen 1', screenReplacement: '$300' },
  { id: 11, model: 'Pro 10.5', screenReplacement: '$250' },
  { id: 12, model: 'Pro 9.7', screenReplacement: '$250' },
  { id: 13, model: 'iPad 10', screenReplacement: '$175' },
  { id: 14, model: 'iPad 9', screenReplacement: '$175' },
  { id: 15, model: 'iPad 8', screenReplacement: '$175' },
  { id: 16, model: 'iPad 7', screenReplacement: '$175' },
  { id: 17, model: 'iPad 6', screenReplacement: '$175' },
  { id: 18, model: 'iPad 5', screenReplacement: '$175' },
  { id: 19, model: 'iPad 4', screenReplacement: '$125' },
  { id: 20, model: 'iPad 3', screenReplacement: '$125' },
  { id: 21, model: 'iPad 2', screenReplacement: '$125' },
  { id: 22, model: 'iPad', screenReplacement: '$125' },
  { id: 23, model: 'iPad mini series', screenReplacement: 'Call for Pricing' },
];

const columns = [
  {
    field: 'model',
    headerName: 'iPad Model',
    width:  375,
    headerClassName: 'IPad-screen-custom-header',
    cellClassName: 'IPad-screen-custom-cell',
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
    field: 'screenReplacement',
    headerName: 'Screen Replacement',
    width:  374.4,
    headerClassName: 'IPad-screen-custom-header',
    cellClassName: 'IPad-screen-custom-cell',
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
    <div className="IPad-screen-repair-info-container">
        <div className='IPad-screen-repair-content'>
        <table className="IPad-screen-repair-info-table">
            <tbody>
            <TableRow header="Issue:" content="	Cracked front glass and / or broken LCD" />
            <TableRow header="Causes:" content="Drop, fall, impact, defective screen / digitizer" />
            <TableRow header="Solution:" content="Replace iPad full glass digitizer" />
            <TableRow header="Parts:" content="Only original and brand new" />
            <TableRow header="Repair time:" content="Typically same – next day" />
            <TableRow header="Warranty:" content="30 days" />
            </tbody>
        </table>
        <div className='IPad-screen-pricing-container'>
            <Box className="IPad-screen-container">
            <Box className="IPad-screen-table-header">
                <TextField
                variant="outlined"
                size='small'
                placeholder="Search"
                value={searchText}
                onChange={handleSearch}
                className="IPad-screen-text-filter"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <i class="fas fa-search"></i>
                    </InputAdornment>
                    ),
                    classes: {
                    notchedOutline: 'IPad-screen-custom-text-field',
                    input: 'IPad-screen-custom-text-input',
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
            <h2 className="IPad-screen-repair-info-title">
               iPad Screen Repair – Walk-in Service Help
            </h2>
            <p className="IPad-screen-repair-info-text">
            We ain’t afraid of a little glass. Yes, we wear goggles 
            and gloves, but in the end, it’s not uncommon to take a 
            few shards of glass for the team. Cut up and wounded, yes, 
            but not defeated, as we aim to conquer the worst of the 
            shattered glass screens to ensure your replacement screen 
            looks flawless. Next time you see us with a few more band-aids 
            on, don’t feel sorry for us. Just know, we will go all lengths 
            and measures to attain your happiness. And, in the end, it make us tougher Floridians!
            </p>
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

