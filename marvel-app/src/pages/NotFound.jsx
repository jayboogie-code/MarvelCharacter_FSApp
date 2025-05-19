import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import wrongpage from '../assets/wrongpage.png'; // Corrected import path

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <img
        src={wrongpage}
        alt="Page Not Found"
        className="img-fluid mb-4"
        style={{ maxWidth: '300px' }}
      />
      <h1 className="display-4 text-danger">404</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <p className="text-muted">
        It seems you may have taken a wrong turn. Don't worry, it happens to the best of us!
      </p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link to="/characters" className="btn btn-outline-secondary">
          View Characters
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;