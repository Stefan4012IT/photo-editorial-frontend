import React, { useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import Header from '../components/Header';
import PREFIX from '../config';
import profilImg from '../assets/img/profile_pic_trail.jpg';
import editorial_1 from '../assets/img/edotorial_1.1.jpg';
import editorial_2 from '../assets/img/edotorial_2.1.jpg';
import editorial_3 from '../assets/img/edotorial_3.1.jpg';
import aboveFooter from '../assets/img/above_footer_2.1.jpg';
import ButtonEditorials from '../components/ButtonEditorials';
import ButtonLoadMore from '../components/ButtonLoadMore';
import NoiseBackgroundLight from '../components/NoiseBackgroundLight';
import NoiseBackgroundDark from '../components/NoiseBackgroundDark';
import NoiseBackgroundVelvet from '../components/NoiseBackgroundVelvet';
import ButtonSend from '../components/ButtonSend';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const [editorials, setEditorials] = useState([]);
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();
    
    const [about, editorials_1, contact] = t('menu', { returnObjects: true });

    const [visibleEditorials, setVisibleEditorials] = useState(3); 
    const increment = 6; 

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

    const handleLoadMore = () => {
      setVisibleEditorials((prev) => Math.min(prev + increment, editorials.length));
    };

    const isLoadMoreVisible = visibleEditorials < editorials.length;

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
        {/* <NoiseBackgroundLight /> */}
        {/* <NoiseBackgroundCanvas/> */}
        <Header />
        <div className="home">
          <div className="home-container container">
            <div className="hero-container">
                <div className="container-left">
                  <div className="navigation">
                    <div className="nav-box nav-box-1">
                      <a href="#">
                        <motion.h2 
                          initial={{ opacity: 0, x: -250 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0 }}
                          className='nav-titles'>
                            {about}
                        </motion.h2>
                      </a>
                    </div>
                    <div className="nav-box nav-box-2">
                      <Link to="/editorials">
                        <motion.h2 
                          initial={{ opacity: 0, x: -250 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className='nav-titles'>
                            {editorials_1}
                        </motion.h2>
                      </Link>
                    </div>
                    <div className="nav-box nav-box-3">
                      <a href="#">
                        <motion.h2 
                          initial={{ opacity: 0, x: -250 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className='nav-titles'>
                            {contact}
                        </motion.h2>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="container-right">
                  <div className="text-box-hero">
                    <motion.p 
                    initial={{ opacity: 0, x: 250 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='body-text'>
                    <Trans i18nKey="intro" components={{ br: <br/> }} />
                    </motion.p>
                  </div>
                </div>
              
            </div>
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay:0.3 }}
            className="section-about container-content">
                <h2 className='titles'>{t('aboutTitle')}</h2>
                <div className="about-content-box">
                  <div className="profil-img">
                    <img src={profilImg} alt="Profile picture" />
                  </div>
                  <div className="about-text-content">
                    <p className='body-text'>
                      {t('aboutCopy')}
                    </p>
                  </div>
                </div>
                
            </motion.div>
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay:0.3 }}
            className="section-editorials container-content">
              <h2 className='titles'>{t('aboutTitle')}</h2>
              <div className="editorials-content-box">
                <div className="editorials">
                {editorials.slice(0, visibleEditorials).map((editorial, index) => (
                    <div className={`editorial-item editorial-item-1`} key={editorial.id}>
                      <img src={`${PREFIX}/${editorial.featuredImage}`} alt={editorial.name} />
                      <div className="album-overlay"></div>
                      <h4 className="overlay-title">{editorial.name}</h4>
                    </div>
                  ))}
                </div>
                
                <div className="btn-editorials-container">
                  <ButtonEditorials />  
                </div>
                {visibleEditorials < editorials.length && (
                <div className="btn-load-more-container">
                  <ButtonLoadMore onClick={handleLoadMore} /> 
                </div>
                )}
              </div>
              
              
            </motion.div>
            
          </div>
          <div className="section-contact">
            {
              theme === 'light' ? (
                <NoiseBackgroundDark />
              ) : theme === 'dark' ? (
                <NoiseBackgroundLight />
              ) : theme === 'velvet' ? (
                <NoiseBackgroundVelvet />
              ) : theme === 'dark-velvet' ? (
                <NoiseBackgroundVelvet />
              ) : (
                null
              )
            }
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay:0.3 }}
            className="section-contact-container container">
              <p className='body-text'>{t('formSectionCopy')}</p>

              <div className="contact-form">
              <div className="form-group">
                <p className="form-label">
                {t('labelEmail')}
                </p>
                <input type="text" name="email" id="email" placeholder='email@example.com'/>
              </div>
              <div className="form-group">
                <p className="form-label">
                {t('labelMsg')}
                </p>
                <textarea  rows="6" name="message" id="message" placeholder={t('placeholderMsg')}/>
              </div>
              <ButtonSend />
            </div>
            </motion.div>
            
            
          </div>
          <div className="section-photography">
            <img src={aboveFooter} alt="photo-editorial" />
          </div>
        </div>
        
        <Footer />
      
      </>
    );
  };
  
  export default Home;
