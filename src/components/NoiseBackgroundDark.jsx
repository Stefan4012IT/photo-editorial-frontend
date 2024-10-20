import React, { useEffect, useRef } from 'react';

const NoiseBackgroundDark = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const generateVelvetNoise = () => {
      const imageData = ctx.createImageData(width, height);
      
      // Osnovne RGB vrednosti za boju #33191a (R: 51, G: 25, B: 26) 0 25 26 --- tirkizna, zapamti; rgb(237,243,237)
      const baseR = 25;
      const baseG = 25;
      const baseB = 25;

      for (let i = 0; i < imageData.data.length; i += 4) {
        const randomOffset = Math.random() * 20 - 10; // Varijacija od -10 do +10
        imageData.data[i] = baseR + randomOffset; // Red
        imageData.data[i + 1] = baseG + randomOffset; // Green
        imageData.data[i + 2] = baseB + randomOffset; // Blue
        imageData.data[i + 3] = 255; // Alpha
      }

      ctx.putImageData(imageData, 0, 0);
    };

    generateVelvetNoise();
    window.addEventListener('resize', generateVelvetNoise);

    return () => window.removeEventListener('resize', generateVelvetNoise);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default NoiseBackgroundDark;