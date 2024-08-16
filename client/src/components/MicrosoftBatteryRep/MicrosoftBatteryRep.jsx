import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import './MicrosoftBatteryRep.scss';

import ScreenImage from '../../assets/screen-image.png'; 
import ModelImage from '../../assets/model-image.png'; 

const data = [
  { id: 1, model: 'All Models (typically)', screenReplacement: '$350' },
];

const columns = [
  {
    field: 'model',
    headerName: 'Microsoft Surface Model',
    width:  375,
    headerClassName: 'Microsoft-battery-custom-header',
    cellClassName: 'Microsoft-battery-custom-cell',
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
    width:  374.4,
    headerClassName: 'Microsoft-battery-custom-header',
    cellClassName: 'Microsoft-battery-custom-cell',
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
    <div className="Microsoft-battery-repair-info-container">
        <div className='Microsoft-battery-repair-content'>
            <p className="Microsoft-battery-Des">
            Battery not lasting like it used to? Not charging? No power light? No worries! Our Surface experts are experienced at replacing Microsoft Surface batteries.
            </p>
        <table className="Microsoft-battery-repair-info-table">
            <tbody>
            <TableRow header="Issue:" content="Battery dying fast or not charging" />
            <TableRow header="Causes:" content="Usage, bloated battery" />
            <TableRow header="Solution:" content="Replace Microsoft Surface battery" />
            <TableRow header="Parts:" content="Only original and brand new" />
            <TableRow header="Repair Time:" content="Typically within a few days" />
            <TableRow header="Warranty:" content="30 days + fully guaranteed" />
            </tbody>
        </table>
        <h2 className="Microsoft-text-header-middle">$100 off when installing both your screen and battery at the same time!</h2>
        <div className='Microsoft-battery-pricing-container'>
            <Box className="Microsoft-battery-container">
            <Box className="Microsoft-battery-table-header">
                <TextField
                variant="outlined"
                size='small'
                placeholder="Search"
                value={searchText}
                onChange={handleSearch}
                className="Microsoft-battery-text-filter"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <i className="fas fa-search"></i>
                    </InputAdornment>
                    ),
                    classes: {
                    notchedOutline: 'Microsoft-battery-custom-text-field',
                    input: 'Microsoft-battery-custom-text-input',
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
            <h2 className="Microsoft-battery-repair-info-title">
               Replace your Microsoft Surface Battery 
            </h2>
            <p className="Microsoft-battery-repair-info-text">
            Microsoft may deem your Microsoft Surface unfixable if your battery is failing.   We don’t!  We’re happy to replace your failing battery.  It’s not for beginners.  The glass is required to be removed prior to replacing the battery.  We have a lot of experience performing these battery replacements.  And we’re happy to take care of your battery replacement on your Microsoft Surface.
            </p>
        </div>
</div>
  );
};

const TableRow = ({ header, content }) => {
    return (
      <tr className="Microsoft-battery-repair-info-table-row">
        <td className="Microsoft-battery-repair-info-table-header-cell">{header}</td>
        <td className="Microsoft-battery-repair-info-table-cell">{content}</td>
      </tr>
    );
  };

TableRow.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TableWithSearchAndPagination;
