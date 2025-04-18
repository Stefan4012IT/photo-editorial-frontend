import React from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/components/_button.scss'; 
import { Link } from 'react-router-dom';

const ButtonEditorials = () => {
  const { t } = useTranslation();

  return (
    <Link to="/editorials">
    <div className="btn-editorials">
        <div className="box-btn-editorials">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="anime-text">{t('btnEditorial')}</div>
        </div>
    </div>
    </Link>
    
  );
};

export default ButtonEditorials;