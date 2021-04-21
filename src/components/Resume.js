import React from 'react'

const Resume = () => {
  return (
    <div id="resume" className="resume">
      <div className="d-flex justify-content-center my-5">
        <h1>Work History</h1>
      </div>
      <div className="container resume-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2015-2016</h3>
            <h5>Operations Specialist</h5>
            <p>Nolan Transportation Group</p>
            <p>Acted as a front-line resource for providing customer service for clients, provided direction to logistics planners in order to maximize their value
              and supported brokers and account managers by managing operational tasks
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016-2017</h3>
            <h5>Inside Sales Associate</h5>
            <p>W.M. McClain Co.</p>
            <p>Identified potential customers, assessed customer needs, reccommended products and closed sales</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2019</h3>
            <h5>Export Operations Specialist</h5>
            <p>V. Alexander & Co.</p>
            <p>Arranged the export of goods for over 80 domestic clients and a volume of over 1,000 containers per year</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <h5>Fleet Manager</h5>
            <p>Western Express</p>
            <p>Managed the daily operations of a 45 truck flatbed fleet, routing across the country and optimizing for maximum miles</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
