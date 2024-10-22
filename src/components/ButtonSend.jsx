import React from 'react';
import '../scss/components/_button.scss'; 
import NoiseBackgroundCanvas from './NoiseBackgroundLight';

const ButtonSend = () => {
  return (
    <div className="btn-send">
        <NoiseBackgroundCanvas />
        <span className='btn-text'>
            SEND
        </span>
    </div>
  );
};

export default ButtonSend;