import './DataRecoveryServices.scss';

export const ListItem = ({ text }) => {
    return (
        <li className="data-items">
            <span className="data-items-checkmark">{'\u2714'}</span>
            <span className="data-items-text">{text}</span>
        </li>
    );
};