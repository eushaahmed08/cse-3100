import { useState } from 'react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can send the data to your backend or email service
    // For now, we're just logging it
    console.log({ name, email, message });

    // Set the status after form submission (can be changed based on your backend response)
    setStatus('Thank you for reaching out! We will get back to you soon.');
    
    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact-us">
      <h2 className="text-center mt-4">Contact Us</h2>
      
      <div className="container mt-4">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        {status && <div className="mt-3 alert alert-success">{status}</div>}
      </div>
    </section>
  );
}
