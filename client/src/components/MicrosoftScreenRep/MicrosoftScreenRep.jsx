import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import './MicrosoftScreenRep.scss';

import ScreenImage from '../../assets/screen-image.png'; 
import ModelImage from '../../assets/model-image.png'; 

const data = [
  { id: 1, model: 'Surface Pro 8 - 9', screenReplacement: '$600' },
  { id: 2, model: 'Surface Laptop 1 - 2', screenReplacement: '$350' },
  { id: 3, model: 'Surface Pro X', screenReplacement: '$550' },
  { id: 4, model: 'Surface Go 1 - 2', screenReplacement: '$350' },
  { id: 5, model: 'Surface Book 1 - 2 - 3', screenReplacement: '$400' },
  { id: 6, model: 'Surface Pro 7 - 7 Plus', screenReplacement: '$350' },
  { id: 7, model: 'Surface Pro 5 - 6', screenReplacement: '$350' },
  { id: 8, model: 'Surface Pro 2 - 3 - 4', screenReplacement: '$350' },
  { id: 9, model: 'Surface 1 - 2 - 3 - RT', screenReplacement: '$350' },
  { id: 10, model: 'Surface Laptop 3 - 4', screenReplacement: '$500' },
];

const columns = [
  {
    field: 'model',
    headerName: 'Microsoft Surface Model',
    width: 375,
    headerClassName: 'Microsoft-screen-custom-header',
    cellClassName: 'Microsoft-screen-custom-cell',
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
    field: 'screenReplacement',
    headerName: 'Screen Replacement',
    width: 374.4,
    headerClassName: 'Microsoft-screen-custom-header',
    cellClassName: 'Microsoft-screen-custom-cell',
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
    <div className="Microsoft-screen-repair-info-container">
        <div className='Microsoft-screen-repair-content'>
        <table className="Microsoft-screen-repair-info-table">
            <tbody>
            <TableRow header="Issue:" content="Cracked front glass and / or broken LCD" />
            <TableRow header="Causes:" content="Drop, fall, impact, defective screen / digitizer" />
            <TableRow header="Solution:" content="Replace Microsoft Surface LCD screen" />
            <TableRow header="Parts:" content="Only original and brand new" />
            <TableRow header="Repair time:" content="same – next day" />
            <TableRow header="Warranty:" content="30 days & Guaranteed Repair" />
            </tbody>
        </table>
        <div className='Microsoft-screen-pricing-container'>
            <Box className="Microsoft-screen-container">
            <Box className="Microsoft-screen-table-header">
                <TextField
                variant="outlined"
                size='small'
                placeholder="Search"
                value={searchText}
                onChange={handleSearch}
                className="Microsoft-screen-text-filter"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <i className="fas fa-search"></i>
                    </InputAdornment>
                    ),
                    classes: {
                    notchedOutline: 'Microsoft-screen-custom-text-field',
                    input: 'Microsoft-screen-custom-text-input',
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
            <h2 className="Microsoft-screen-repair-info-title">
              Microsoft Screen Repair – Walk-in Service Help
            </h2>
            <p className="Microsoft-screen-repair-info-text">
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
      <tr className="Microsoft-screen-repair-info-table-row">
        <td className="Microsoft-screen-repair-info-table-header-cell">{header}</td>
        <td className="Microsoft-screen-repair-info-table-cell">{content}</td>
      </tr>
    );
};

TableRow.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TableWithSearchAndPagination;
