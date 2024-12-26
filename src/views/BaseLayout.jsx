import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light py-3">
        <h1 className="m-0">
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
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
