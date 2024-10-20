import React, { useEffect, useRef } from 'react';

const NoiseBackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Funkcija koja vraća celu visinu stranice
    const calculateFullPageHeight = () => {
      return document.documentElement.scrollHeight; // Visina cele stranice, uključujući sve sekcije
    };

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = calculateFullPageHeight(); // Koristimo celu visinu stranice
      canvas.width = width;
      canvas.height = height;

      // Kreiranje male površine za noise pattern
      const noiseCanvas = document.createElement('canvas');
      const noiseCtx = noiseCanvas.getContext('2d');
      const noiseSize = 100; // Fiksirana veličina noise patterna
      noiseCanvas.width = noiseSize;
      noiseCanvas.height = noiseSize;

      // Generisanje noise patterna
      const generateNoisePattern = () => {
        const imageData = noiseCtx.createImageData(noiseSize, noiseSize);
        for (let i = 0; i < imageData.data.length; i += 4) {
          const noiseValue = Math.random() * 255; // Random grayscale noise
          imageData.data[i] = noiseValue; // Red
          imageData.data[i + 1] = noiseValue; // Green
          imageData.data[i + 2] = noiseValue; // Blue
          imageData.data[i + 3] = 30; // Alpha, transparentnost
        }
        noiseCtx.putImageData(imageData, 0, 0);
      };

      generateNoisePattern();

      // Kreiraj noise pattern na glavnom canvasu
      const drawNoise = () => {
        const pattern = ctx.createPattern(noiseCanvas, 'repeat');
        ctx.clearRect(0, 0, width, height); // Očisti canvas pre svakog crtanja
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, width, height); // Popuni ceo ekran pattern-om
      };

      drawNoise();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
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

export default NoiseBackgroundCanvas;
