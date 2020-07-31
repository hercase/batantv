import React from 'react';
import './style.sass';

const RecommendedComponent = () => {
  
  return (
    <section className="recommended">
      <div className="container">
        <h2 className="display">Recomendados</h2>
        <div className="recommended-grid">
          <div className="recommended-item">
            <div className="recommended-wrap">
              <iframe title="Video 1" className="recommended-item" src="https://www.youtube.com/embed/hhOzPrEpoSg?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="recommended-item">
            <div className="recommended-wrap">
              <iframe title="Video 2" className="recommended-item" src="https://www.youtube.com/embed/5CK6IyxSGPo?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="recommended-item">
            <div className="recommended-wrap">
              <iframe title="Video 3" className="recommended-item" src="https://www.youtube.com/embed/J1ZBSAM4MjA?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default RecommendedComponent;