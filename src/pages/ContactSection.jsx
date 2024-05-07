import React, { useState } from "react";

const ContactSection = () => {
  const [submitResult, setSubmitResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    setSubmitResult("Please wait...");

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status === 200) {
          setSubmitResult(json.message);
        } else {
          console.log(response);
          setSubmitResult(json.message);
        }
      })
      .catch((error) => {
        console.log(error);
        setSubmitResult("Something went wrong!");
      })
      .then(() => {
        form.reset();
        setTimeout(() => {
          setSubmitResult(null);
        }, 3000);
      });
  };

  return (
    <>
      <div id="contact-section" className="contact-section">
        <h2 className="contact-heading">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Company Information</h3>
            <p>Phone: 123-456-789</p>
            <p>Address: 123 Street, City, Country</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="b550c95d-c4f3-4ccf-a6b4-2eb4bbd2bc7c" />
              <input type="hidden" name="subject" value="New Submission from Web3Forms" />
              <input type="checkbox" name="botcheck" style={{ display: "none" }} />

              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit">Submit Form</button>
            </form>
            {submitResult && <div id="result">{submitResult}</div>}
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12689.326072901393!2d-122.02742601225039!3d37.33465942846665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2s!4v1714799882379!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
};

export default ContactSection;
