'use client'

import React, { useState } from 'react';

const Tooltip = ({ children, text, position }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const getTooltipStyle = () => {
    switch (position) {
        case 'top':
            return {
                bottom: 'calc(100% + 10px)',
                left: '50%',
                transform: 'translateX(-50%)'
            };
        case 'bottom':
            return {
                top: 'calc(100% + 10px)',
                left: '50%',
                transform: 'translateX(-50%)'
            };
        case 'left':
            return {
                top: '50%',
                left: 'auto',
                right: 'calc(100% + 10px)',
                transform: 'translateY(-50%)'
            };
        case 'right':
            return {
                top: '50%',
                right: 'auto',
                left: 'calc(100% + 10px)',
                transform: 'translateY(-50%)'
            };
        default:
            return {
                bottom: 'calc(100% + 10px)',
                left: '50%',
                transform: 'translateX(-50%)'
            };
    }
};



  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {showTooltip && (
        <div style={{
          position: 'absolute',
          ...getTooltipStyle(),
          padding: '5px',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '4px',
          whiteSpace: 'nowrap',
          fontSize:'0.5rem'
        }}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
