import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Spinner, Alert } from 'react-bootstrap';

const EditCharacter = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // New success state
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    alias: '',
    alignment: '',
    powers: '',
    image_url: '',
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:5000/characters/${id}`)
      .then((response) => {
        setCharacter(response.data);
        setFormData(response.data);
      })
      .catch(() => {
        setError('Failed to fetch character details.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.alias.trim()) errors.alias = 'Alias is required.';
    if (!formData.alignment.trim()) errors.alignment = 'Alignment is required.';
    if (!formData.powers.trim()) errors.powers = 'Powers are required.';
    if (!formData.image_url.trim()) {
      errors.image_url = 'Image URL is required.';
    } else if (!/^https?:\/\/.+\..+/.test(formData.image_url)) {
      errors.image_url = 'Image URL must be a valid URL.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    axios
      .put(`http://127.0.0.1:5000/characters/${id}`, formData)
      .then(() => {
        setSuccess(true); // Set success state
        setTimeout(() => {
          navigate('/characters'); // Redirect after 2 seconds
        }, 2000);
      })
      .catch((err) => {
        const backendError = err.response?.data?.message || 'Failed to update character.';
        setError(backendError);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-4" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="mt-4">
      <h1>Edit Character</h1>
      {success && <Alert variant="success">Character updated successfully! Redirecting...</Alert>}
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!formErrors.name}
          />
          <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="alias" className="mt-3">
          <Form.Label>Alias</Form.Label>
          <Form.Control
            type="text"
            name="alias"
            value={formData.alias}
            onChange={handleChange}
            isInvalid={!!formErrors.alias}
          />
          <Form.Control.Feedback type="invalid">{formErrors.alias}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="alignment" className="mt-3">
          <Form.Label>Alignment</Form.Label>
          <Form.Control
            as="select"
            name="alignment"
            value={formData.alignment}
            onChange={handleChange}
            isInvalid={!!formErrors.alignment}
          >
            <option value="">Select Alignment</option>
            <option value="hero">Hero</option>
            <option value="villain">Villain</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">{formErrors.alignment}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="powers" className="mt-3">
          <Form.Label>Powers</Form.Label>
          <Form.Control
            type="text"
            name="powers"
            value={formData.powers}
            onChange={handleChange}
            isInvalid={!!formErrors.powers}
          />
          <Form.Control.Feedback type="invalid">{formErrors.powers}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="image_url" className="mt-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            isInvalid={!!formErrors.image_url}
          />
          <Form.Control.Feedback type="invalid">{formErrors.image_url}</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="mt-4" disabled={loading}>
          {loading ? 'Saving...' : 'Save Changes'}
        </Button>
      </Form>
    </Container>
  );
};

export default EditCharacter;