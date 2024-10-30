import React from 'react'
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer">
        <div 
        className="footer-container container">
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay:0.3 }}
            className="footer-content container-content">
            <h2 className='titles'>CONTACTS</h2>
            <div className="content-box">
              <div className="social-networks">
                <h4 className='footer-subtitle'>SOCIAL NETWORKS</h4>
                <a href="">
                  <span className="name">
                    FACEBOOK
                  </span>
                </a>
                <a href="">
                  <span className="name">
                    INSTAGRAM
                  </span>
                </a>
              </div>

              <div className="phone-mail">
                <h4 className='footer-subtitle'>PHONE AND E-MAIL</h4>
                <a href="">
                  <span className="name">
                    +381 65 65 656 56
                  </span>
                </a>
                <a href="">
                  <span className="name">
                    MYEMAIL@MAIL.COM
                  </span>
                </a>
              </div>
            </div>
            
            </motion.div>
        </div>
        <div className="footer-section">
          <p>&copy; 2024 photo editorial</p>
        </div>
    </div>
  )
}


export default Footer;