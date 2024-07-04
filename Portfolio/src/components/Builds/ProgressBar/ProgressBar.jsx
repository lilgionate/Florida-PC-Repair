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
    <div className="builds-progress">
      <div className="builds-progress-done" style={style}>
      </div>
    </div>
  );
};

const ProgressBar = ({ title, image, done }) => {
  return (
      <div className="builds-progress-bar-container">
        <div className='builds-progress-bar-image'>
         <img src={image} alt=""/>
        </div>
        <div className='builds-progress-bar-info'>
        <div className="builds-progress-title">{title}</div>
          <Progress done={done} />
        </div>
    </div>
  );
};

export default ProgressBar;