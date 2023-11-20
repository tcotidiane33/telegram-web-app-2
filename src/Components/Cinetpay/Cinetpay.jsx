import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap"; // Assurez-vous d'importer les composants nécessaires de Bootstrap
import "./Cinetpay.css";


function CinetpayForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    amount: 0,
    currency: "XOF",
    channels: "ALL",
    description: "",
    customer_name: "",
    customer_surname: "",
    customer_email: "",
    customer_phone_number: "",
    customer_address: "",
    customer_city: "",
    customer_country: "",
    customer_state: "",
    customer_zip_code: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez effectuer des actions supplémentaires ici avant de soumettre le formulaire
    onSubmit(formData);
  };

  return (
    <Container className="form-container">
        <Row className="justify-content-center">
            <Col xs={12} md={8}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="amount" className="content">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group controlId="currency">
                    <Form.Label>Currency</Form.Label>
                    <Form.Control
                    type="text"
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group controlId="channels">
                    <Form.Label>Channels</Form.Label>
                    <Form.Control
                    type="text"
                    name="channels"
                    value={formData.channels}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group controlId="customer_name">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control
                    type="text"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group controlId="customer_surname">
                    <Form.Label>Customer Surname</Form.Label>
                    <Form.Control
                    type="text"
                    name="customer_surname"
                    value={formData.customer_surname}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group controlId="customer_email">
                    <Form.Label>Customer Email</Form.Label>
                    <Form.Control
                    type="email"
                    name="customer_email"
                    value={formData.customer_email}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group controlId="customer_phone_number">
                    <Form.Label>Customer Phone Number</Form.Label>
                    <Form.Control
                    type="tel"
                    name="customer_phone_number"
                    value={formData.customer_phone_number}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group controlId="customer_address">
                    <Form.Label>Customer Address</Form.Label>
                    <Form.Control
                    type="text"
                    name="customer_address"
                    value={formData.customer_address}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group controlId="customer_city">
                    <Form.Label>Customer City</Form.Label>
                    <Form.Control
                    type="text"
                    name="customer_city"
                    value={formData.customer_city}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group controlId="customer_country">
                    <Form.Label>Customer Country</Form.Label>
                    <Form.Control
                    type="text"
                    name="customer_country"
                    value={formData.customer_country}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group controlId="customer_state">
                    <Form.Label>Customer State</Form.Label>
                    <Form.Control
                    type="text"
                    name="customer_state"
                    value={formData.customer_state}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group controlId="customer_zip_code">
                    <Form.Label>Customer Zip Code</Form.Label>
                    <Form.Control
                    type="text"
                    name="customer_zip_code"
                    value={formData.customer_zip_code}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Col>
        </Row>
    </Container>
    
  );
}

export default CinetpayForm;


/*
const cp = new Cinetpay({
    apikey: '447088687629111c58c3573.70152188', // Votre API Key
    site_id: '911501', // Votre Site ID
    notify_url: 'https://lecompay.netlify.app/notify',
    return_url: 'https://lecompay.netlify.app/return',
    lang: 'fr',
  });
*/
