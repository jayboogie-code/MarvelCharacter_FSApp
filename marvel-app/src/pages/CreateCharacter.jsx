import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';

const CreateCharacter = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    alias: '',
    alignment: '',
    powers: '',
    image_url: '',
  });

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
      .post('http://127.0.0.1:5000/characters', formData)
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          navigate('/characters'); // Redirect to the characters list
        }, 2000);
      })
      .catch((err) => {
        const backendError = err.response?.data?.message || 'Failed to create character.';
        setError(backendError);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="form-container">
      <div className="holographic-card">
        <h1 className="form-title">Create Character</h1>
        {success && <Alert variant="success">Character created successfully! Redirecting...</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} noValidate className="form-content">
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

          <Button type="submit" className="mt-4 btn-primary" disabled={loading}>
            {loading ? 'Creating...' : 'Create Character'}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateCharacter;