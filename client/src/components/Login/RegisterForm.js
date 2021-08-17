import React from "react";
import { Form, Button } from "react-bootstrap";
export default function RegisterForm() {
  return (
    <Form className="form-card">
      <Form.Floating className="mb-3 control-register">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
        <Form.Text className="text-muted">Email is invalid</Form.Text>
      </Form.Floating>
      <Form.Floating className="mb-3 control-register">
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
        <Form.Text className="text-muted">Password is incorrect</Form.Text>
      </Form.Floating>
      <Form.Floating className="mb-3 control-register">
        <Form.Control
          id="floatingRePasswordCustom"
          type="Re-password"
          placeholder="Re-Password"
        />
        <label htmlFor="floatingPasswordCustom">Re-Password</label>
        <Form.Text className="text-muted">Password is incorrect</Form.Text>
      </Form.Floating>

      <Button variant="primary" type="submit" className="form-submit-button">
        Create account
      </Button>
    </Form>
  );
}
