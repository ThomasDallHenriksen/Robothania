import React from 'react';
import '../css/technologyGear.css';

interface TechnologyGearProps {
  className?: string;
  style?: React.CSSProperties;
  activeNodes?: string[]; // Array of node IDs that should be active
}

const TechnologyGear: React.FC<TechnologyGearProps> = ({ 
  className, 
  style, 
  activeNodes = [] 
}) => {
  // Helper function to check if a node should be active
  const isNodeActive = (nodeId: string) => activeNodes.includes(nodeId);

  return (
    <div className={`technology-gear-container ${className || ''}`} style={style}>
      <svg 
        version="1.1" 
        viewBox="-200 0 670 439" 
        xmlns="http://www.w3.org/2000/svg"
        className="technology-gear-svg"
      >
        <defs>
          <style>
            {`
              .st0 {fill: #689367;}
              .green {fill: #689367;}
              .node {fill: #689367;}
              .pin {fill: #689367;}
              .label {fill: #fff; font-family: 'Graphik', Arial, sans-serif; font-size: 24px; font-weight: bold;}
            `}
          </style>
        </defs>
        
        {/* Bottom right node */}
        <g className={`node-group ${isNodeActive('node7') ? 'active' : ''}`}>
          <rect className="pin" transform="rotate(-89.7 209.25 382.86)" x="187" y="381.3" width="44.1" height="3"/>
          <path className="node" d="m209.1 422.2c-2.5 0-4.9-1-6.6-2.8-1.8-1.8-2.7-4.1-2.7-6.7 0-5.2 4.2-9.3 9.4-9.3s9.4 4.3 9.3 9.4c0 5.2-4.2 9.3-9.4 9.3zm0-15.8c-3.5 0-6.4 2.8-6.4 6.3s2.8 6.4 6.3 6.4 6.4-2.8 6.4-6.3-2.8-6.4-6.3-6.4z"/>
          <text id="node7" className="label" x="192" y="420" textAnchor="end">Shared Source and Supply Chain</text>
        </g>
        
        {/* Main circle */}
        <path id="circle" className="green" d="m302.4 278.2c-29.9 0-54.3-24.4-54.3-54.3s24.4-54.3 54.3-54.3 54.3 24.4 54.3 54.3-24.4 54.3-54.3 54.3zm0-102.6c-26.6 0-48.3 21.7-48.3 48.3s21.7 48.3 48.3 48.3 48.3-21.7 48.3-48.3-21.7-48.3-48.3-48.3z"/>
        
        {/* Arrows */}
        <g id="arrows" className="green">
          <path id="arrow-north" className="arrow-north" d="m320.9 107.5h-37l18.5-35.1zm-27-6h17.1l-8.5-16.2-8.5 16.2z"/>
          <path id="arrow-south" className="arrow-south" d="m302.4 375.4-18.5-35.1h37zm-8.5-29.1 8.5 16.2 8.5-16.2h-17.1z"/>
          <path id="arrow-west" className="arrow-west" d="m186 242.4-35.1-18.5 35.1-18.5zm-22.2-18.5 16.2 8.5v-17.1l-16.2 8.5z"/>
          <path id="arrow-east" className="arrow-east" d="m417.43 205.4 35.1 18.5-35.1 18.5zm22.2 18.5-16.2-8.5v17.1l16.2-8.5z" fill="#689367"/>
        </g>
        
        {/* Left node */}
        <g className={`node-group ${isNodeActive('node4') ? 'active' : ''}`}>
          <path className="node" d="m32 172.8c-5.2 0-9.4-4.2-9.3-9.2 0-2.5 1-4.7 2.8-6.5 1.8-1.7 4.1-2.6 6.6-2.6 5.2 0 9.4 4.2 9.3 9.2h-1.5 1.5c0 2.5-1 4.7-2.8 6.5-1.8 1.7-4.1 2.6-6.6 2.6zm0-15.3c-1.7 0-3.3 0.6-4.5 1.8s-1.9 2.7-1.9 4.3c0 3.4 2.8 6.2 6.3 6.2 1.7 0 3.3-0.6 4.5-1.8s1.9-2.7 1.9-4.3c0-3.4-2.8-6.2-6.3-6.2z"/>
          <polygon className="pin" points="136.6 192.5 109.2 165.2 40.4 165.2 40.4 162.2 110.4 162.2 138.7 190.4"/>
          <text id="node4" className="label" x="15" y="171" textAnchor="end">User Interface</text>
        </g>
        
        {/* Bottom left node */}
        <g className={`node-group ${isNodeActive('node6') ? 'active' : ''}`}>
          <path className="node" d="m85.2 365.1c-2.5 0-4.9-1-6.6-2.8s-2.7-4.1-2.7-6.6 1-4.9 2.8-6.6c1.8-1.8 4.1-2.7 6.6-2.7s4.9 1 6.6 2.8c1.8 1.8 2.7 4.1 2.7 6.6s-1 4.9-2.8 6.6c-1.8 1.8-4.1 2.7-6.6 2.7zm0-15.8c-1.7 0-3.3 0.7-4.5 1.9s-1.9 2.8-1.9 4.5 0.7 3.3 1.9 4.5 2.8 1.9 4.5 1.9 3.3-0.7 4.5-1.9 1.9-2.8 1.9-4.5-0.7-3.3-1.9-4.5-2.8-1.9-4.5-1.9z"/>
          <polygon className="pin" points="91.8 350.1 89.9 348.1 123 315.8 163 315.8 163 318.8 124.3 318.8"/>
          <text id="node6" className="label" x="70" y="363" textAnchor="end">MedTech Compliance</text>
        </g>
        
        {/* Top left node */}
        <g className={`node-group ${isNodeActive('node3') ? 'active' : ''}`}>
          <path className="node" d="m85.2 111.4c-2.5 0-4.9-1-6.6-2.8s-2.7-4.1-2.7-6.6 1-4.9 2.8-6.6c1.8-1.8 4.1-2.7 6.6-2.7s4.9 1 6.6 2.8c1.8 1.8 2.7 4.1 2.7 6.6s-1 4.9-2.8 6.6c-1.8 1.8-4.1 2.7-6.6 2.7zm0-15.8c-1.7 0-3.3 0.7-4.5 1.9s-1.9 2.8-1.9 4.5 0.7 3.3 1.9 4.5 2.8 1.9 4.5 1.9 3.3-0.7 4.5-1.9 1.9-2.8 1.9-4.5-0.7-3.3-1.9-4.5-2.8-1.9-4.5-1.9z"/>
          <polygon className="pin" points="93.6 100.9 114 100.9 142 128.8 164.1 128.8 164.1 131.8 140.7 131.8 112.7 103.9 93.6 103.9"/>
          <text id="node3" className="label" x="70" y="110" textAnchor="end">Robot Control</text>
        </g>
        
        {/* Middle left node */}
        <g className={`node-group ${isNodeActive('node5') ? 'active' : ''}`}>
          <path className="node" d="m57 293.5c-2.5 0-4.9-1-6.6-2.8s-2.7-4.1-2.7-6.6 1-4.9 2.8-6.6c1.8-1.8 4.1-2.7 6.6-2.7 5.2 0 9.4 4.2 9.4 9.4 0 2.5-1 4.9-2.8 6.6-1.8 1.8-4.1 2.7-6.6 2.7zm0-15.7c-1.7 0-3.3 0.7-4.5 1.9s-1.9 2.8-1.9 4.5 0.7 3.3 1.9 4.5 2.8 1.9 4.5 1.9 3.3-0.7 4.5-1.9 1.9-2.8 1.9-4.5c0-3.5-2.9-6.4-6.4-6.4z"/>
          <polygon className="pin" points="113.5 254.7 136.9 254.7 136.9 257.7 114.7 257.7 86.7 285.6 66.1 285.6 66.1 282.6 85.5 282.6"/>
          <text id="node5" className="label" x="40" y="292" textAnchor="end">Functional Safety</text>
        </g>
        
        {/* Top nodes */}
        <g className={`node-group ${isNodeActive('node1') ? 'active' : ''}`}>
          <path className="node" d="m175.5 28.5c-5.2 0-9.4-4.2-9.3-9.2 0-5 4.2-9.1 9.4-9.1s9.4 4.2 9.3 9.2h-1.5 1.5c0 2.5-1 4.7-2.8 6.5-1.8 1.7-4.1 2.6-6.6 2.6zm-0.1-15.3c-3.5 0-6.4 2.7-6.4 6.1s2.8 6.2 6.3 6.2c1.7 0 3.3-0.6 4.5-1.8s1.9-2.7 1.9-4.3c0-3.4-2.8-6.2-6.3-6.2z"/>
          <polygon className="pin" points="208.8 86.4 174 51.7 174 28 177 28 177 50.5 210.9 84.3"/>
          <text id="node1" className="label" x="157" y="27" textAnchor="end">Drive Electronics</text>
        </g>

        <g className={`node-group ${isNodeActive('node2') ? 'active' : ''}`}>
          <path className="node" d="m143 60.3c-5.2 0-9.4-4.2-9.3-9.2 0-5 4.2-9.1 9.4-9.1s9.4 4.2 9.3 9.2h-1.5 1.5c0 2.5-1 4.7-2.8 6.5-1.8 1.7-4.1 2.6-6.6 2.6zm0-15.3c-3.5 0-6.4 2.7-6.4 6.1s2.8 6.2 6.3 6.2c1.7 0 3.3-0.6 4.5-1.8s1.9-2.7 1.9-4.3c0-3.4-2.8-6.2-6.3-6.2z"/>
          <rect className="pin" x="151.9" y="49.1" width="25.1" height="3"/>
          <polygon className="pin" points="208.8 86.4 174 51.7 174 28 177 28 177 50.5 210.9 84.3"/>

          <text id="node2" className="label" x="125" y="59" textAnchor="end">Actuators</text>
        </g>
        
        {/* Main gear */}
        <g id="gear">
          <path className="green" d="m336.2 390h-67.5l-7.5-40.9c-6.2-2-12.2-4.5-18-7.5l-34.3 23.6-47.7-47.7 23.6-34.3c-2.9-5.8-5.5-11.9-7.5-18l-40.9-7.5v-67.5l40.9-7.5c2-6.2 4.5-12.2 7.5-18l-23.6-34.3 47.7-47.7 34.3 23.6c5.8-2.9 11.9-5.5 18-7.5l7.5-40.9h67.5l7.5 40.9c6.2 2 12.2 4.5 18 7.5l34.3-23.6 45.9 45.9-4.2 4.2-42.4-42.4-33.1 22.8-1.6-0.8c-6.5-3.4-13.4-6.3-20.4-8.5l-1.7-0.5-7.3-39.6h-57.5l-7.3 39.6-1.7 0.5c-7 2.2-13.9 5-20.4 8.5l-1.6 0.8-33.1-22.8-40.6 40.6 22.8 33.1-0.8 1.6c-3.4 6.5-6.3 13.4-8.5 20.4l-0.5 1.7-39.6 7.3v57.5l39.6 7.3 0.5 1.7c2.2 7 5 13.9 8.5 20.4l0.8 1.6-22.8 33.1 40.6 40.6 33.1-22.8 1.6 0.8c6.5 3.4 13.4 6.3 20.4 8.5l1.7 0.5 7.3 39.6h57.5l7.3-39.6 1.7-0.5c7-2.2 13.9-5 20.4-8.5l1.6-0.8 33.1 22.8 42.4-42.4 4.2 4.2-45.9 45.9-34.3-23.6c-5.8 2.9-11.9 5.5-18 7.5l-7.5 40.9z"/>
          <path className="st1" d="m466.95 189.48v68.63l-40.9 7.6256c-2 6.3038-4.5 12.404-7.5 18.301l23.6 34.874-7.9-0.71173-22.8-33.654 0.8-1.6268c3.4-6.6089 6.3-13.624 8.5-20.742l0.5-1.7285 39.6-7.4222v-58.463l-39.6-7.4223-0.5-1.7285c-2.2-7.1172-5-14.133-8.5-20.742l-0.8-1.6268 22.8-33.654 7.7-0.71172-23.6 34.874c2.9 5.8971 5.5 12.099 7.5 18.301l40.9 7.6256z" fill="#689367" strokeWidth="1.0083"/>
        </g>
      </svg>
    </div>
  );
};

export default TechnologyGear;