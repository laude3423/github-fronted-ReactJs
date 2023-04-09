import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
    
        const [validated, setValidated] = useState(false);
        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);
        };
    
  return (
    <div className='appa'>
        <div className="containe">
        <h1>Login</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
            <div className="form-group">
                <Form.Group as={Col} md="14" controlId="validationCustom01">
                    <Form.Label>Adresse email</Form.Label><Form.Control
                        required
                        type="email"
                        placeholder="Votre adresse email"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </div>
            <div className='form-group'>
                <Form.Group as={Col} md="14" controlId="validationCustom02">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Votre mot de passe"
                    />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </div>
          
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Se connecter</Button>
      </Form>
        </div>
    </div>
  )
}

export default Login