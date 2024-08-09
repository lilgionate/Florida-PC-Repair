import PropTypes from 'prop-types';
import './CyberSecurityPage.scss';

const Note = () => {
  return (
    <div className="note-container">
      <h2 className="note-title">Note:</h2>
      <div className="note-list">
        <NoteItem text="The tech insurance would be for remote service or at our repair center, 3750 Inverrary Dr, Lauderhill, FL 33319" />
        <NoteItem text="It does not include onsite support at customer's location." />
        <NoteItem text="Minimum of 1-year term is required." />
      </div>
    </div>
  );
};

const NoteItem = ({ text }) => {
  return (
    <li className="note-item">
      <span className="note-bullet">•</span>
      <span className="note-text">{text}</span>
    </li>
  );
};

NoteItem.propTypes = {
  text: PropTypes.string.isRequired, // Ensure text is a required string
};

export default Note;
