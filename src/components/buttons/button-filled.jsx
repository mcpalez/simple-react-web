import React from 'react';

const ButtonFilled = ({ children }) => {
    return (
        <button className='button-primary-filled'>
            {children}
        </button>
    );
};

export default ButtonFilled;