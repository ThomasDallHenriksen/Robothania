import React from 'react';

const Logo: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      {/* Gear icon */}
      <div style={{ position: 'relative' }}>
        <svg width="80" height="80" viewBox="0 0 80 80">
          {/* Main gear body */}
          <g fill="none" stroke="#6B7C32" strokeWidth="3">
            {/* Central circle */}
            <circle cx="40" cy="40" r="25" />
            
            {/* Gear teeth - top */}
            <rect x="35" y="5" width="10" height="15" />
            <rect x="30" y="8" width="20" height="9" />
            
            {/* Gear teeth - right */}
            <rect x="60" y="35" width="15" height="10" />
            <rect x="63" y="30" width="9" height="20" />
            
            {/* Gear teeth - bottom */}
            <rect x="35" y="60" width="10" height="15" />
            <rect x="30" y="63" width="20" height="9" />
            
            {/* Gear teeth - left */}
            <rect x="5" y="35" width="15" height="10" />
            <rect x="8" y="30" width="9" height="20" />
            
            {/* Gear teeth - diagonal positions */}
            <rect x="50" y="12" width="8" height="12" transform="rotate(45 54 18)" />
            <rect x="58" y="50" width="12" height="8" transform="rotate(45 64 54)" />
            <rect x="22" y="58" width="8" height="12" transform="rotate(45 26 64)" />
            <rect x="12" y="22" width="12" height="8" transform="rotate(45 18 26)" />
          </g>
          
          {/* Inner circle */}
          <circle cx="40" cy="40" r="8" fill="#6B7C32" />
        </svg>
      </div>
      
      {/* ROBOTHANIA text */}
      <div style={{ 
        fontFamily: 'Arial, sans-serif', 
        fontSize: '32px', 
        fontWeight: 'bold', 
        color: '#6B7C32',
        letterSpacing: '2px'
      }}>
        ROBOTHANIA
      </div>
    </div>
  );
};

export default Logo;
