import React from 'react'
import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon
} from 'react-share'
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Nashville, TN 37209</p>
            </div>
            <div className="d-flex">
              <a href="tel:615-815-5890">615-815-5890</a>
            </div>
            <div className="d-flex">
              <p>jblong27@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br/>
                <a className="footer-nav">About Me</a>
                <br/>
                <a className="footer-nav">Contact Me</a>
              </div>
              <div className="col">
                <a className="footer-nav">Work Experience</a>
                <br/>
                <a className="footer-nav">Portfolio</a>
                <br/>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <TwitterShareButton
                url={"https://twitter.com/jordanblong"}
                quote={"Fullstack Developer"}
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={"www.linkedin.com/in/jordan-long-11009b137"}
                quote={"Fullstack Developer"}
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Jordan Long | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
