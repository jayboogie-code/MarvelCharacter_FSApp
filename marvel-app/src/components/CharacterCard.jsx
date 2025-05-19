import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  return (
    <Card className="text-center position-relative holographic-card">
      <Card.Img
        variant="top"
        src={character.image_url || '/path/to/fallback-image.jpg'}
        alt={character.name}
        className="character-image"
      />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <strong>Alias:</strong> {character.alias || "Unknown"} <br />
          <strong>Alignment:</strong> {character.alignment || "Unknown"} <br />
          <strong>Powers:</strong> {character.powers || "No powers available."}
        </Card.Text>
        <Link to={`/character/${character.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;