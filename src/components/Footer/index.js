import React from 'react';
import './style.sass';
import SocialComponent from 'components/SocialIcons/social-component';

const FooterComponent = () => {
  return (
    <footer>
      <div className="topbar">
        <p>Seguinos en nuestras redes sociales!</p>
        <SocialComponent />
      </div>
      <div className="container">
        <div>
            <div className="footer-columns">
              <div className="footer-columns-block">
                  <h6>Nosotros</h6>
                  <hr />
                  <p>Batan.TV es la plataforma OTT de video on line y televisión en vivo de la Cooperativa Batan donde podrás disfrutar de un amplio catálogo de contenidos originales de producidos por nuestra ciudad y alrededores.</p>
              </div>
              <div className="footer-columns-block">
                  <h6>Productos</h6>
                  <hr />
                  <p><a href="http://www.ecolan.com/" target="_blank" rel="noopener noreferrer" >Ecolan</a></p>
                  <p><a href="http://caraludme.edu.ar/" target="_blank" rel="noopener noreferrer" >Caraludme</a></p>
                  <p><a href="#!">Ecodev</a></p>
              </div>
              <div className="footer-columns-block">
                  <h6>Links Utiles</h6>
                  <hr />
                  <p><a href="#!">Mi cuenta</a></p>
                  <p><a href="#!">Suscripción</a></p>
                  <p><a href="#!">Ayuda</a></p>
              </div>
              <div className="footer-columns-block">
                  <h6>Contact</h6>
                  <hr />
                  <p>Julian Rios 4215 - Batan</p>
                  <p>info@batan.coop</p>
                  <p>+ 223 464 3000</p>
              </div>
            </div>
        </div>
        <div className="footer-copyright">
          &copy; 2020 Copyright - <a href="https://batan.tv/"> Batan.tv</a>
          </div>
      </div>
    </footer>
  );
}

export default FooterComponent;