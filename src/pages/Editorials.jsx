import React, { useContext, useState, useEffect } from 'react';
import PREFIX from '../config';
import NoiseBackgroundLight from '../components/NoiseBackgroundLight';
import NoiseBackgroundDark from '../components/NoiseBackgroundDark';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NoiseBackgroundVelvet from '../components/NoiseBackgroundVelvet';
import { Link as RouterLink } from 'react-router-dom'; 
import { LanguageContext } from '../context/LanguageContext';

const Editorials = () => {
  const { theme } = useContext(ThemeContext);
  const { setCurrentPage } = useContext(ThemeContext);
  const { i18n, t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  const [editorials, setEditorials] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // Da prati status učitavanja

  useEffect(() => {
    const fetchEditorials = async () => {
      try {
        const response = await fetch(`${PREFIX}/assets/data/editorials.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEditorials(data);
        setIsLoaded(true); // Postavi na true kada su editorijali učitani
      } catch (error) {
        console.error("Error fetching editorials:", error);
      }
      
    };
  
    fetchEditorials();
  }, []);

  useEffect(() => {
    setCurrentPage('editorials'); // Postavi trenutnu stranicu
  }, [setCurrentPage]);

  useEffect(() => {
    if (isLoaded) {
      // Ponovni proračun visine nakon učitavanja sadržaja
      const event = new Event('resize');
      window.dispatchEvent(event); // Ovim simuliraš promenu veličine ekrana
    }
  }, [isLoaded]); // Ovo se izvršava kada su editorijali učitani

  return (
    <>
      {
          theme === 'light' ? (
            <NoiseBackgroundLight />
          ) : theme === 'dark' ? (
            <NoiseBackgroundDark />
          ) : theme === 'velvet' ? (
            <NoiseBackgroundVelvet />
          ) : theme === 'dark-velvet' ? (
            <NoiseBackgroundVelvet />
          ) : (
            null
          )
        }
      <Header />
        <div className="editorials-container container">
          <div className="editorials-content container-content">
            <h2 className='titles'>{t('editorialstTitle')}</h2>
            <div className="editorials-content-box">
            
              <div className="editorials">
                {editorials.map((editorial, index) => (
                  <RouterLink to={`/editorial/${editorial.id}`}>
                    <div className={`editorial-item editorial-item-1`} key={editorial.id}>
                      <img src={`${PREFIX}/${editorial.featuredImage}`} alt={editorial.name[lang]} />
                      <div className="album-overlay"></div>
                      <h4 className="overlay-title">{editorial.name[lang]}</h4>
                    </div>
                  </RouterLink>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Editorials