import './CyberSecurityPage.scss';
import PropTypes from 'prop-types';

const PricingTable = () => {
  const rowsData = [
    { title: "Simple flat rate - monthly fee", activeIndexes: [0] },
    { title: "Free setup", activeIndexes: [0] },
    { title: "Cloud solution -> No slowdown", activeIndexes: [0] },
    { title: "Actual techs (not just software)", activeIndexes: [0] },
    { title: "No out of pocket expenses", activeIndexes: [0] },
    { title: "Remote support included", activeIndexes: [0] },
    { title: "Complete Cyber Protection", activeIndexes: [0] },
    { title: "Choose between remote or walk-in", activeIndexes: [0] },
    { title: "Covers new and old devices", activeIndexes: [0, 1, 2, 3, 4] },
    { title: "Walk in to a repair center (no shipping)", activeIndexes: [0, 3, 4] },
    { title: "Love your local Florida business", activeIndexes: [4] },
  ];

  return (
    <>
      <h2 className="cyber-table-title">Why Choose Florida PC Support?</h2>
      <table className="cyber-table">
        <thead>
          <tr>
            <th className="cyber-table-header-cell"></th>
            <th className="cyber-table-header-cell cyber-table-active-cell cyber-table-centered-cell">FPCS</th>
            <th className="cyber-table-header-cell cyber-table-centered-cell">Norton</th>
            <th className="cyber-table-header-cell cyber-table-centered-cell">McAfee</th>
            <th className="cyber-table-header-cell cyber-table-centered-cell">Best Buy</th>
            <th className="cyber-table-header-cell cyber-table-centered-cell">Another Tech Shop</th>
          </tr>
        </thead>
        <tbody>
          {rowsData.map((row, index) => (
            <TableRow
              key={index}
              title={row.title}
              activeIndexes={row.activeIndexes}
              isGrey={index % 2 !== 0} // Add grey background for every other row
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

const TableRow = ({ title, activeIndexes, isGrey }) => {
  const activeIndexesArray = Array.isArray(activeIndexes) ? activeIndexes : [activeIndexes];

  const cells = [
    { active: true },
    { active: activeIndexesArray.includes(1) },
    { active: activeIndexesArray.includes(2) },
    { active: activeIndexesArray.includes(3) },
    { active: activeIndexesArray.includes(4) },
  ];

  return (
    <tr className={isGrey ? 'cyber-table-grey-row' : ''}>
      <td className={`cyber-table-title-cell ${isGrey ? 'cyber-table-grey-cell' : ''}`}>{title}</td>
      {cells.map((cell, index) => (
        <td
          key={index}
          className={`cyber-table-cell cyber-table-centered-cell ${
            cell.active && index === 0 ? 'cyber-table-active-cell' : ''
          }`}
        >
          {cell.active ? <span className="cyber-table-icon">✅</span> : <span className="cyber-table-icon">❌</span>}
        </td>
      ))}
    </tr>
  );
};

TableRow.propTypes = {
  title: PropTypes.string.isRequired,
  activeIndexes: PropTypes.arrayOf(PropTypes.number).isRequired,
  isGrey: PropTypes.bool.isRequired,
};

export default PricingTable;
