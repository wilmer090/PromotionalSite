import React from 'react';

const CloseIcon = ({action}) => {
    return (
        <div className="close-container" onClick={action}>
            X
        </div>
    );
}

export default CloseIcon;