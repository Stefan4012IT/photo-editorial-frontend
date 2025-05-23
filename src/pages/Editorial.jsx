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
import { DataContext } from '../context/DataContext';
import { div } from 'framer-motion/client';
import { LanguageContext } from '../context/LanguageContext';

const Editorial = () => {
  const { id } = useParams(); // Dohvaćanje ID iz URL-a
  console.log("Editorial ID from URL:", id);
  const { theme } = useContext(ThemeContext);
  const { setCurrentPage } = useContext(ThemeContext);
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  const [editorial, setEditorial] = useState(null); // Početna vrednost je null
  const { authors, categories, isLoaded } = useContext(DataContext);
  const [imageClasses, setImageClasses] = useState([]);
  const [featuredClass, setFeaturedClass] = useState('');
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [author, setAuthor] = useState(null);
  const [editorialCategories, setEditorialCategories] = useState([]);

  
  useEffect(() => {
    const fetchEditorial = async () => {
      try {
        const response = await fetch(`${PREFIX}/assets/data/editorials.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Filtriraj samo editorijal sa odgovarajućim ID-jem
        const selectedEditorial = data.find(item => item.id === parseInt(id));
        if (selectedEditorial) {
          selectedEditorial.images = selectedEditorial.images || [];
        }
        setEditorial(selectedEditorial);
        // Inicijalizujte niz klasa za slike
        setImageClasses(new Array(selectedEditorial.images.length).fill(''));
      } catch (error) {
        console.error("Error fetching editorials:", error);
      }
    };

    fetchEditorial();
  }, [id]);

  useEffect(() => {
  if (!editorial || !isLoaded) return;

  // Pronađi autora
  const foundAuthor = authors.find(a => a.id === editorial.authorId);
  setAuthor(foundAuthor || null);

  // Pronađi kategorije
  const foundCategories = Array.isArray(editorial.categoryIds)
    ? editorial.categoryIds
        .map(categoryId => categories.find(c => c.id === categoryId))
        .filter(Boolean)
    : [];

  setEditorialCategories(foundCategories);
}, [editorial, authors, categories, isLoaded]);

  const handleImageLoad = (index, event) => {
    const img = event.target;
    const newClasses = [...imageClasses];
    if (img.naturalWidth > img.naturalHeight) {
      newClasses[index] = 'wide-image'; // Postavi klasu za široku sliku
    } else {
      newClasses[index] = 'tall-image'; // Postavi klasu za visoku sliku
    }
    setImageClasses(newClasses); // Ažuriraj state
    setImagesLoaded((prev) => prev + 1); // Povećaj broj učitanih slika
  };

  const handleFeaturedLoad = (event) => {
  const img = event.target;
  if (img.naturalWidth > img.naturalHeight) {
    setFeaturedClass('wide-image');
  } else {
    setFeaturedClass('tall-image');
  }
};

  useEffect(() => {
    if (imagesLoaded === editorial?.images.length) {
      // Kada su sve slike učitane, proračunaj visinu sadržaja
      const event = new Event('resize');
      window.dispatchEvent(event);
    }
  }, [imagesLoaded, editorial]);

    if (!isLoaded || !editorial) {
      return <p>Loading...</p>;
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
      <div className="editorial-container container">
        <div className="editorial-content container-content">
          <h2 className='titles'>{editorial.name[lang]}</h2>
          <div className="editorial-featured">
            <img
              src={`${PREFIX}/${editorial.featuredImage}`}
              alt={editorial.name[lang]}
              className={`editorial-featured--image ${featuredClass}`}
              onLoad={handleFeaturedLoad}
            />
            <div className="editorial-featured--info">
              <div className="editorial-featured--info_box">
                <div className="top-left"></div>
                <div className="top-right"></div>
                <div className="side-top-left"></div>
                <div className="side-top-right"></div>
                <div className="side-bottom-left"></div>
                <div className="side-bottom-right"></div>
                <div className="bottom-left"></div>
                <div className="bottom-right"></div>
                
                
                <div className="editorial-featured--info_content">
                <p className='info-value'>{editorial.description[lang]}</p>
                {author && (
                  <div>
                    <p className="editorial-label">{t('photographer')}:</p>
                    <p className='info-value'>{author.name[lang]}</p>
                  </div>
                )}
                {editorialCategories.length > 0 && (
                <div>
                  <p className="editorial-label">{t('categories')}:</p>
                    {editorialCategories.map((category, index) => (
                        <span className='info-value' key={index}>{category.name[lang]}&emsp;</span>
                    ))}
                </div>
                 )}
                 {editorial.date && (
                  <div>
                    <p className="editorial-label">{t('date')}:</p>
                    <p className="info-value">{editorial.date}</p>
                  </div>

                 )

                 }
              </div>
              
              </div>
            </div>
          </div>
          
          <div className='editorial-images'>
            { editorial.images && editorial.images.length > 0 ? (editorial.images.map((image, index) => (
              <img
                key={index}
                src={`${PREFIX}/${image.path}`}
                alt={`${editorial.name[lang]} -  ${index + 1}`}
                className={`editorial-images_singleImg ${imageClasses[index]}`}
                onLoad={(event) => handleImageLoad(index, event)}
              /> ))
            ): (
                <p>No images available for this editorial.</p>
              )}
          </div>
        </div>
        
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Editorial;
