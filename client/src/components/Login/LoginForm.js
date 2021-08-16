import React from "react";
import { Form, Button } from "react-bootstrap";
export default function LoginForm() {
  return (
    <Form className="form-card">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">Email is invalid</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">Password is incorrect</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" className="form-submit-button">
        Submit
      </Button>
    </Form>
  );
}
