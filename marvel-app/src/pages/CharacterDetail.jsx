import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Spinner, Alert, Image, Button } from 'react-bootstrap';

const CharacterDetail = () => {
  const { id } = useParams(); // Get the character ID from the URL
  const navigate = useNavigate(); // For navigation after deletion
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/characters/${id}`) // Fetch character by ID
      .then((response) => {
        setCharacter(response.data);
      })
      .catch(() => {
        setError('Failed to fetch character details.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm(`Are you sure you want to delete ${character.name}?`)) return;

    setDeleting(true);
    axios
      .delete(`http://127.0.0.1:5000/characters/${id}`)
      .then(() => {
        alert('Character deleted successfully!');
        navigate('/characters'); // Redirect to the characters list page
      })
      .catch(() => {
        setDeleteError('Failed to delete character. Please try again.');
      })
      .finally(() => {
        setDeleting(false);
      });
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!character) return <Alert variant="info">Character not found.</Alert>;

  return (
    <Container className="mt-4">
      <h1>{character.name}</h1>
      <Image src={character.image_url} alt={character.name} fluid className="mb-4" />
      <p><strong>Alias:</strong> {character.alias}</p>
      <p><strong>Alignment:</strong> {character.alignment}</p>
      <p><strong>Powers:</strong> {character.powers}</p>
      <div className="d-flex gap-2 mt-3">
        <Link to={`/character/${id}/edit`} className="btn btn-primary">Edit Character</Link>
        <Button
          variant="danger"
          onClick={handleDelete}
          disabled={deleting}
        >
          {deleting ? <Spinner as="span" animation="border" size="sm" /> : 'Delete Character'}
        </Button>
      </div>
      {deleteError && <Alert variant="danger" className="mt-3">{deleteError}</Alert>}
    </Container>
  );
};

export default CharacterDetail;