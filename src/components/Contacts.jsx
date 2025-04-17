import React, { useState } from 'react';

const Contacts = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { email, message });
    // You can plug EmailJS or a backend endpoint here.
  };

  return (
    <section className="Contact-content container pt-4" id="Contact">
      <div id="queries" className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="display-5 fw-bold lh-1 p-3">Let's Talk</h1>

        <form className="w-50" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Message Box */}
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a message..."
              id="messageTextarea"
              style={{ height: '100px' }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <label htmlFor="messageTextarea">Message</label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn resume-profile btn-dark">Submit</button>
        </form>
      </div>

      {/* Social Media Icons */}
      <div className="socials mt-5">
        <ul className="bi list-unstyled d-flex gap-3 justify-content-center align-items-center">
          <li>
            <a href="https://www.linkedin.com/in/kavishreekrishnamoorthy" target="_blank" rel="noopener noreferrer" className="text-dark">
              <i className="bi bi-linkedin shadow"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/kavishreekrishnamoorthy" target="_blank" rel="noopener noreferrer" className="text-dark">
              <i className="bi bi-github shadow"></i>
            </a>
          </li>
          <li>
            <a href="mailto:kavishree2451@gmail.com" className="text-dark">
              <i className="bi bi-envelope shadow"></i>
            </a>
          </li>
        </ul>
      </div>

    
    </section>
  );
};

export default Contacts;
