import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner, Alert, Carousel } from 'react-bootstrap';
import CharacterCard from '../components/CharacterCard';

const Characters = ({ characters, setCharacters }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/characters')
      .then((response) => {
        setCharacters(response.data);
      })
      .catch(() => {
        setError('Failed to fetch characters.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (characters.length === 0) return <Alert variant="info">No characters available.</Alert>;

  return (
    <Container className="mt-4">
      <h2>Marvel Characters</h2>

      {/* Character Carousel */}
      <Carousel className="mb-4">
        {characters.slice(0, 8).map((character) => (
          <Carousel.Item key={character.id}>
            <img
              className="d-block w-100 carousel-image" // Added the "carousel-image" class
              src={character.image_url}
              alt={character.name}
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>{character.name}</h3>
              <p>{character.powers || 'No powers available.'}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Character Grid */}
      <Row>
        {characters.map((character) => (
          <Col md={4} sm={6} xs={12} key={character.id} className="mb-4">
            <CharacterCard character={character} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Characters;