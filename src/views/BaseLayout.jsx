import { Link, Outlet } from 'react-router-dom';
import Lottie from 'react-lottie'; // Import Lottie
import animationData from '../assets/cat2.json'; // Import your animation JSON file (replace with your actual file path)

const BaseLayout = () => {
  // Lottie options
  const lottieOptions = {
    loop: true,
    autoplay: true, // Animation will play automatically
    animationData: animationData, // Your imported animation JSON file
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Make sure it's centered
    },
  };

  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light py-3">
        <h1 className="m-0">
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        {/* Lottie animation in the Navbar */}
        <div className="lottie-container" style={{ width: '50px', height: '50px' }}>
          <Lottie options={lottieOptions} height={50} width={50} />
        </div>
        <div className="flex-grow-1"></div>

        

        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main id="content" className="container mt-4">
        <Outlet />
      </main>

      <footer className="bg-light py-3">
        <p className="text-center m-0">© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
