import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import eusha from '../assets/eusha.jpg';
import uthsaw from '../assets/uthsaw.jpg';
import arif from '../assets/arif.jpg';

export default function AboutUs() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section
      className="about-us"
      style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}
      data-aos="fade-up"
    >
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-up" data-aos-delay="100">
          About us
        </h2>

        {/* Mission Section */}
        <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay="200">
          <div className="col-md-8">
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide a loving, safe, and forever home for every cat in need. We aim to connect compassionate individuals with the perfect feline companion, ensuring a better life for both.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay="300">
          <div className="col-md-8">
            <h3>Our History</h3>
            <p>
              Founded in 2010, our organization has been dedicated to rescuing and rehoming abandoned cats. Over the years, we’ve successfully matched thousands of cats with families who offer them the love and care they deserve.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay="400">
          <div className="col-md-8">
            <h3>Our Team</h3>
            <div className="row">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
                <div className="card">
                  <img
                    src={eusha}
                    className="card-img-top"
                    alt="Eusha Ahmed"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Eusha Ahmed</h5>
                    <p className="card-text">meow 1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                <div className="card">
                  <img
                    src={uthsaw}
                    className="card-img-top"
                    alt="Amirul Momin"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Amirul Momin</h5>
                    <p className="card-text">meow 2</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="700">
                <div className="card">
                  <img
                    src={arif}
                    className="card-img-top"
                    alt="Tanvir Arif"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Tanvir Arif</h5>
                    <p className="card-text">meow 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
