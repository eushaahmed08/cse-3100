export default function ContactUs() {
  return (
    <section className="contact-us" style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
      <div className="container">
        <h2 className="text-center mb-4">^•ﻌ•^ฅ♡ Contact Us</h2>
        <p className="text-center text-muted mb-4">
          Have questions or need assistance? Reach out to us!
        </p>

        <form className="row g-3 justify-content-center">
          <div className="col-12">
            <label htmlFor="name" className="form-label">🧶 Name</label>
            <input type="text" className="form-control" id="name" placeholder="Your Name" />
          </div>

          <div className="col-12">
            <label htmlFor="email" className="form-label">🧶 Email</label>
            <input type="email" className="form-control" id="email" placeholder="Your Email" />
          </div>

          <div className="col-12">
            <label htmlFor="phone" className="form-label">🧶 Phone</label>
            <input type="tel" className="form-control" id="phone" placeholder="Your Number" />
          </div>

          <div className="col-12">
            <label htmlFor="message" className="form-label">🧶 Message</label>
            <textarea id="message" className="form-control" rows="4" placeholder="Your Message"></textarea>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary px-4">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
