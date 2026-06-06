import React from "react";
import "./ContactUs.css";
import Title from "../Title/Title";
import assets from "../../assets/assets";
import { toast } from "react-hot-toast";

const ContactUs = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "98795e60-09af-4bcc-8a0d-be63ac432a2b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {

      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
    }
  };

  return (
    <section id="contact-us" className="contact-us">
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <form onSubmit={onSubmit} className="contact-form">
        <div className="contact-row">
          <div className="input-group">
            <label>Your Name</label>

            <div className="input-box">
              <img src={assets.person_icon} alt="person" />

              <input type="text" name="name" placeholder="Enter your name" required />
            </div>
          </div>

          <div className="input-group">
            <label>Email Address</label>

            <div className="input-box">
              <img src={assets.email_icon} alt="email" />

              <input type="email" name="email" placeholder="Enter your email" required />
            </div>
          </div>
        </div>

        <div className="textarea-group">
          <label>Message</label>

          <textarea name="message" rows="8" placeholder="Enter your message" required ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit <img src={assets.arrow_icon} alt="arrow" />
        </button>

     </form>
    </section>
  );
};

export default ContactUs;
