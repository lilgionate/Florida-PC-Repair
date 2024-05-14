import React from 'react';
import './progressBar.scss';

const Progress = ({ done }) => {
  const style = {
    opacity: 1,
    width: `${done}%`,
    transition: 'width 1s ease-in-out',
    '--done': done
  };

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
      </div>
    </div>
  );
};

const ProgressBar = ({ title, image, done }) => {
  return (
      <div className="progress-bar-container">
        <div className='progress-bar-image'>
         <img src={image} alt=""/>
        </div>
        <div className='progress-bar-info'>
        <div className="progress-title">{title}</div>
          <Progress done={done} />
        </div>
    </div>
  );
};

export default ProgressBar;