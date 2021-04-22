import React from 'react'
import portrait from '../images/portrait.JPG'


const AboutMe = () => {
  return (
    <div id="about" className="about-me-wrapper">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img className="profile-img" src={portrait} alt="portrait..."/>
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">About Me</h1>
              <p>
                I am a software developer from Nashville, TN with experience in HTML, CSS, JS, React, MongoDB, SQL and Node.js. 
              My background is in logistics so I have a lot of experience working in a team setting, dealing with people and problem solving.
              I have always been interested in programming but never took the full leap until 2020 and that's been the only thing I've been focused on since. 
              Now, with each new project, my aim is to provide the user with a clean and easy to use interface that is fast loading and responsive.
              I’m excited to use my skills as part of a fast-paced, quality-driven team to build better experiences on the web. 
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
