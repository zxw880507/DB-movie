import React from "react";
import { Form, Button } from "react-bootstrap";
export default function RegisterForm() {
  return (
    <Form className="form-card">
      <Form.Group className="mb-3" controlId="register-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">Email is invalid</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="register-password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">Password is incorrect</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="retype-register-password">
        <Form.Label>Re-Password</Form.Label>
        <Form.Control type="password" placeholder="Re-Password" />
        <Form.Text className="text-muted">Password is incorrect</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" className="form-submit-button">
        Create account
      </Button>
    </Form>
  );
}
