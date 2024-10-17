import React from 'react';

const NoiseBackground = () => {
  return (
    <svg
      id="noise"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
    >
      <filter id="noise-filter">
        <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix 
          type="matrix" 
          values="0.7 0 0 0 0 
                  0 0.9 0 0 0 
                  0 0 0.5 0 0 
                  0 0 0 0.2 0" />
        <feComponentTransfer>
          <feFuncR type="linear" slope="0.46" />
          <feFuncG type="linear" slope="0.46" />
          <feFuncB type="linear" slope="0.46" />
          <feFuncA type="linear" slope="0.56" />
        </feComponentTransfer>
        <feComponentTransfer>
          <feFuncR type="linear" slope="1.47" intercept="-0.23" />
          <feFuncG type="linear" slope="1.47" intercept="-0.23" />
          <feFuncB type="linear" slope="1.47" intercept="-0.23" />
        </feComponentTransfer>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-filter)" />
    </svg>
  );
};

export default NoiseBackground;