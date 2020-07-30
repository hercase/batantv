import React from 'react';
import './style.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const SocialComponent = () => {
  return(
    <div className="social-component">
        <SocialIcon icon={faFacebookF} url="https://www.facebook.com/coopbatan" />
        <SocialIcon icon={faInstagram} url="https://twitter.com/coopbatan" />
        <SocialIcon icon={faTwitter} url="https://www.instagram.com/coopbatan/"/>
    </div>
  );
};

const SocialIcon = ({icon, url}) => { 
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <FontAwesomeIcon className="social-icon" icon={icon} size="lg" color="white"/>
    </a>
  );
};

export default SocialComponent;