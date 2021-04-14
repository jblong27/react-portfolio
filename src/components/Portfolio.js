import React from 'react'
import shsearch from '../images/projects/shsearch.PNG'
import yesman from '../images/projects/yesman.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={shsearch} alt="superhero search" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={yesman} alt="yesman app" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
      </div>
    </div>
  )
}

export default Portfolio
