import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail.svg";
import git_icon from "../../assets/github.svg";
import insta_icon from "../../assets/insta.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4819d309-8eb6-44c0-9fdf-40941597fda6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Email sent successfully!");
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            If you're looking for a passionate software developer to collaborate
            on exciting projects or explore internship opportunities, feel free
            to reach out! I'm eager to learn, grow, and contribute to innovative
            solutions.
          </p>
          <div className="contact-details">
            <div className="xyz">
              <img src={mail_icon} alt="" />
              <p>vishalgautam142004@gmail.com</p>
            </div>
            <div className="xyz">
              <img src={git_icon} alt="" />
              <p>Vishal002004</p>
            </div>
            <div className="xyz">
              <img src={insta_icon} alt="" />
              <p>v.shal01</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter you name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Mail" name="email" />
          <label htmlFor="">Write your message here </label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
          ></textarea>
          <button type="Submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
