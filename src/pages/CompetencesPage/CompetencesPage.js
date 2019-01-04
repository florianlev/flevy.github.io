import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '@components/PortfolioItem';
import ScrollToPrevious from '@components/ScrollToPrevious';
import competencesItems from './competences-items';

import './style.scss';

const CompetencesPage = (props, context) => {
    const {
  
      theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
    } = context;
  
    return (
        <div className="competences" style={{ backgroundColor: bgPrimary }}>
          <div className="content-grid">
            <h1 style={{ color: colorPrimary }}>Competences</h1>
            <div className="portfolio-wrapper">
              <style jsx="true">
                {`
                  .portfolio-item {
                    background-color: ${colorPrimary};
                    color: ${textAlternate};
                  }
                  .portfolio-item a {
                    color: ${textAlternate};
                  }
                  .portfolio-item__links a:hover {
                    border-bottom: 2px solid ${colorAlternate};
                  }
                `}
              </style>
            {competencesItems.map((item, i) => (
                <PortfolioItem render={item.render} key={i} >
                </PortfolioItem>
                ))}
            </div>
          </div>
          <ScrollToPrevious pageSelector=".portfolio-page" />
        </div>
      );
    };
    
    CompetencesPage.contextTypes = {
      theme: PropTypes.any
    };
    
    export default CompetencesPage;
    