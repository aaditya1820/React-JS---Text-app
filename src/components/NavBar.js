import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">{props.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input mx-2" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault" />
            <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  home: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func
};

NavBar.defaultProps = {
  title: 'Set title here',
  about: 'About',
  home: 'Home'
};
