import React from 'react';
import NoiseBackground from '../components/NoiseBackgroundLight';
import Header from '../components/Header';
import profilImg from '../assets/img/profile_pic_trail.jpg';
import editorial_1 from '../assets/img/edotorial_1.1.jpg';
import editorial_2 from '../assets/img/edotorial_2.1.jpg';
import editorial_3 from '../assets/img/edotorial_3.1.jpg';
import ButtonEditorials from '../components/ButtonEditorials';
import ButtonLoadMore from '../components/ButtonLoadMore';

const Home = () => {
    return (
        <>
        <NoiseBackground />
        
        <Header />
        <div className="home-container">
          <div className="hero-container">
              <div className="container-left">
                <div className="navigation">
                  <div className="nav-box nav-box-1"><a href="#"><h2 className='titles'>ABOUT</h2></a></div>
                  <div className="nav-box nav-box-2"><a href="#" className=''><h2 className='titles'>EDITORIALS</h2></a></div>
                  <div className="nav-box nav-box-3"><a href="#"><h2 className='titles'>CONTACTS</h2></a></div>
                </div>
              </div>
              <div className="container-right">
                <div className="text-box-hero">
                  <p className='body-text'>
                  The moment you think you understand a great work of art, it’s dead for you.<br/>
                  True art eludes complete comprehension, for it is meant to provoke thought, evoke emotion, and stir the depths of the soul. 
                  </p>
                </div>
              </div>
            
          </div>
          <div className="section-about">
              <h2 className='titles'>ABOUT</h2>
              <div className="about-content-box">
                <div className="profil-img">
                  <img src={profilImg} alt="Profile picture" />
                </div>
                <div className="about-text-content">
                  <p className='body-text'>
                    Here, I will reveal the details and places that have not escaped my lens. I am not a professional, but a seeker of overlooked moments, capturing what others might pass by without a second glance. Through my photographs, I share the quiet corners, the subtle textures, and the fleeting instants that whisper stories. Each shot is a glimpse into my wandering eye, a collection of scenes that may seem ordinary, yet hold a beauty that waits to be discovered.
                  </p>
                </div>
              </div>
              
          </div>
          <div className="section-editorials">
            <h2 className='titles'>EDITORIALS</h2>
            <div className="editorials-content-box">
              <div className="editorials">
                <div className="first-img">
                  <img src={editorial_1} alt="Album 1" />
                </div>
                <div className="second-img">
                  <img src={editorial_2} alt="Album 2" />
                </div>
                <div className="third-img">
                  <img src={editorial_3} alt="Album 3" />
                </div>
              </div>
              
              <div className="btn-editorials-container">
                <ButtonEditorials />  
              </div>
              <div className="btn-load-more-container">
                <ButtonLoadMore /> 
              </div>
            </div>
            
            
          </div>
        </div>
        
      <footer className="footer-section">
          <p>&copy; 2024 Galerija Milena Antić</p>
        </footer>
      </>
    );
  };
  
  export default Home;
