import React from 'react'
import portrait from '../portrait.JPG'


const AboutMe = () => {
  return (
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
            I also would describe myself as a tinkerer, I like trying to make things work and working with all kinds of technology. 
            I built my first desktop computer in middle school and have been doing new builds ever since. 
            I have always been interested in programming but never took the full leap until 2020 and that's been the only thing I've been focused on since. 
            So now I'm just looking to get my start somewhere and learn even more.
            </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
