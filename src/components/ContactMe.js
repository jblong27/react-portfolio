import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'

const ContactMe = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_IfyYYBw9WcYsDcfvskFIY";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        body: data.body
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage('Email sent!');
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <div className="contactme">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>Please enter your information below and I will contact you as soon as possible.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("name", {
                    required: "this is required",
                    maxLength: {
                      value: 20,
                      message: "Max length is 20 characters"
                    }
                  })}
                />
                {/* Getting an error here where name is undefinded, need to revisit */}
                {/* {errors.name && <p>{errors.name.message}</p>} */}
                <div className="line"></div>
              </div>
              <div className="text-center">
                <input 
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                />
                <div className="line"></div>                  
              </div>
              <div className="text-center">
                <input 
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
                <div className="line"></div>
              </div>
              <div className="text-center">
                <input 
                  id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                  <textarea 
                    id="body"
                    type="text"
                    className="form-control"
                    placeholder="Message Body"
                    name="body" 
                  ></textarea>
                  <div className="line"></div>
                </div>
              <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactMe

