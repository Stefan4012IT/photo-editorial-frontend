import React, { useContext, useState, useEffect } from 'react';
import PREFIX from '../config';
import NoiseBackgroundLight from '../components/NoiseBackgroundLight';
import NoiseBackgroundDark from '../components/NoiseBackgroundDark';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Editorials = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [editorials, setEditorials] = useState([]);

  useEffect(() => {
    const fetchEditorials = async () => {
      try {
        const response = await fetch(`${PREFIX}/assets/data/editorials.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEditorials(data);
      } catch (error) {
        console.error("Error fetching editorials:", error);
      }
    };
  
    fetchEditorials();
  }, []);

  return (
    <>
      {
        theme === 'light' ? (
          <NoiseBackgroundLight />
        ) : theme === 'dark' ? (
          <NoiseBackgroundDark />
        ) : theme === 'velvet' ? (
          <NoiseBackgroundLight />
        ) : theme === 'dark-velvet' ? (
          <NoiseBackgroundDark />
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
                    <div className={`editorial-item editorial-item-1`} key={editorial.id}>
                      <img src={`${PREFIX}/${editorial.featuredImage}`} alt={editorial.name} />
                      <div className="album-overlay"></div>
                      <h4 className="overlay-title">{editorial.name}</h4>
                    </div>
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