import React from 'react'
import shsearch from '../images/projects/shsearch.PNG'
import yesman from '../images/projects/yesman.png'
import empdirectory from '../images/projects/empdirectory.png'
import spotify from '../images/projects/spotify.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

const Portfolio = () => {

  const openPopupboxSpotify = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={spotify} alt="Spotify clone..."/>
        <p>A Spotify clone built in React that also includes a lyric search for any song. 
        This uses the Spotify Web API, react-spotify-web-playback for the player, and lyrics-finder API for the lyrics.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jblong27/spotify-react-clone")}>
        https://github.com/jblong27/spotify-react-clone</a>
        <br />
        <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://infinite-basin-31399.herokuapp.com/")}>
        https://infinite-basin-31399.herokuapp.com/</a>
      </>
    )
    PopupboxManager.open({content})
  }
  const popupboxConfigSpotify = {
    titleBar: {
      enable: true,
      text: "Spotify"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  const openPopupboxEmployeeDirectory = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={empdirectory} alt="Employee Directory..."/>
        <p>This is an employee directory that allows a user to view their entire staff at once so they have quick access to their information.
         The user can filter employees by name, email or phone number.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jblong27/employee-directory")}>
        https://github.com/jblong27/employee-directory</a>
        <br />
        <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://jblong27.github.io/employee-directory/")}>
        https://jblong27.github.io/employee-directory/</a>
      </>
    )
    PopupboxManager.open({content})
  }
  const popupboxConfigEmployeeDirectory = {
    titleBar: {
      enable: true,
      text: "Employee Directory"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
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
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">

          <div className="portfolio-image-box" onClick={openPopupboxSpotify}>
            <img className="portfolio-image" src={spotify} alt="spotify clone" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxEmployeeDirectory}>
            <img className="portfolio-image" src={empdirectory} alt="employee directory" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
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
      <PopupboxContainer {...popupboxConfigSpotify} />
      <PopupboxContainer {...popupboxConfigEmployeeDirectory} />
      <PopupboxContainer {...popupboxConfigShsearch} />
      <PopupboxContainer {...popupboxConfigYesman} />
    </div>
  )
}

export default Portfolio
