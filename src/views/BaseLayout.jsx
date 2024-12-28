import { Link, Outlet } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../assets/cat2.json';

const BaseLayout = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="layout">
      {/* Header Section */}
      <header className="d-flex align-items-center py-3 custom-header">
        <h1 className="m-0">
          <Link className="text-decoration-none text-white" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="lottie-container" style={{ width: '50px', height: '50px' }}>
          <Lottie options={lottieOptions} height={50} width={50} />
        </div>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main id="content" className="container mt-4">
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer className="py-3 custom-footer">
        <p className="text-center m-0 text-white">© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
