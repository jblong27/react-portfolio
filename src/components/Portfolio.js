import React from 'react'
import shsearch from '../images/projects/shsearch.PNG'
import yesman from '../images/projects/yesman.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

const Portfolio = () => {

  const openPopupboxShsearch = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={shsearch} alt="Superhero search project..."/>
        <p>An app for users to search for a super hero and be given the hero's basic information, 
        a chart of their stats, and an assortment of gifs based on their name.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/tsgrewing/Superhero-Search")}>
        https://github.com/tsgrewing/Superhero-Search</a>
        <br />
        <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://tsgrewing.github.io/Superhero-Search/")}>
        https://tsgrewing.github.io/Superhero-Search/</a>
      </>
    )
    PopupboxManager.open({content})
  }
  const popupboxConfigShsearch = {
    titleBar: {
      enable: true,
      text: "Superhero Search"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openPopupboxYesman = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={yesman} alt="Superhero search project..."/>
        <p>An application that will present the user with a questionnaire that narrows down what activities we think the user may be interested in doing next.
If the user doesn’t think we got it right, we have an input box for them to leave their own suggestion along with their email. 
The user’s suggestion will be stored in our database for us to review and eventually be added to our own suggested activities, so our app can always be growing.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jblong27/yes-man-app")}>
        https://github.com/jblong27/yes-man-app</a>
        <br />
        <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://yes-man-app.herokuapp.com/")}>
        https://yes-man-app.herokuapp.com/</a>
      </>
    )
    PopupboxManager.open({content})
  }
  const popupboxConfigYesman = {
    titleBar: {
      enable: true,
      text: "Yesman App"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">

          <div className="portfolio-image-box" onClick={openPopupboxShsearch}>
            <img className="portfolio-image" src={shsearch} alt="superhero search" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxYesman}>
            <img className="portfolio-image" src={yesman} alt="yesman app" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigShsearch} />
      <PopupboxContainer {...popupboxConfigYesman} />
    </div>
  )
}

export default Portfolio