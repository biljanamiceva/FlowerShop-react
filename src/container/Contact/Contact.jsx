import React from "react";
import "./Contact.css";
import { images } from "../../constants";

const Contact = () => {
  return (
    <div className="app__bg app__contact  app__wrapper flex__center section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.home_flowers} alt="contact_img" />
      </div>

      <div className="app__wrapper_info-c">
        <div className="app__contact-heading">
          <h1>Contact us</h1>
        </div>
        <div className="app__contact-content">
          <form>
            <div className="input-wrapper">
              <input className="create-input" type="text" id="name" required />
              <label className="create-label">Name</label>
            </div>
            <div className="input-wrapper">
              <input className="create-input" type="text" id="email" required />
              <label className="create-label">E-mail</label>
            </div>
            <div className="input-wrapper">
              <textarea
                className="create-input"
                type="text"
                id="message"
                rows="6"
                required
              ></textarea>

              <label className="create-label">Message</label>
            </div>
          </form>
          <div className="app__contact-button">
            <button className="custom__button " type="button">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
