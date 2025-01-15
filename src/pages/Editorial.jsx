import React, { useContext, useState, useEffect } from 'react';
import PREFIX from '../config';
import NoiseBackgroundLight from '../components/NoiseBackgroundLight';
import NoiseBackgroundDark from '../components/NoiseBackgroundDark';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NoiseBackgroundVelvet from '../components/NoiseBackgroundVelvet';
import { useParams } from 'react-router-dom';

const Editorial = () => {
  const { id } = useParams(); // Dohvaćanje ID iz URL-a
  console.log("Editorial ID from URL:", id);
  const { theme } = useContext(ThemeContext);
  const { setCurrentPage } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [editorial, setEditorial] = useState(null); // Početna vrednost je null
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    console.log("Editorial ID from URL:", id);
    const fetchEditorial = async () => {
      try {
        const response = await fetch(`${PREFIX}/assets/data/editorials.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Filtriraj samo editorijal sa odgovarajućim ID-jem
        const selectedEditorial = data.find(item => item.id === parseInt(id));
        setEditorial(selectedEditorial);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching editorials:", error);
      }
    };

    fetchEditorial();
  }, [id]);

  if (!editorial && isLoaded) {
    return <p>Editorial not found!</p>;
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {theme === 'light' ? (
        <NoiseBackgroundLight />
      ) : theme === 'dark' ? (
        <NoiseBackgroundDark />
      ) : theme === 'velvet' ? (
        <NoiseBackgroundVelvet />
      ) : theme === 'dark-velvet' ? (
        <NoiseBackgroundVelvet />
      ) : null}
      <Header />
      <div>
        <h1>{editorial.name}</h1>
        <img src={editorial.featuredImage} alt={editorial.name} />
        <h2>Images</h2>
        <div>
          {editorial.images.map((image, index) => (
            <img
              key={index}
              src={image.path}
              alt={`${editorial.name} - Image ${index + 1}`}
              style={{ width: '200px', margin: '10px' }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Editorial;
