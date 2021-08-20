import React from "react";
import { Form, Button } from "react-bootstrap";
import useLogin from "../../hooks/useLogin";
export default function LoginForm(props) {
  const { alerts, changeInput, resetAlerts, login } = useLogin(props);
  return (
    <Form className="form-card" onSubmit={login}>
      <Form.Group className="mb-3" controlId="login-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          autoComplete="off"
          data-type="email"
          onChange={changeInput}
          onFocus={resetAlerts}
        />
        {alerts.email && (
          <Form.Text className="text-muted">{alerts.email}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="login-password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete="off"
          data-type="password"
          onChange={changeInput}
          onFocus={resetAlerts}
        />

        {alerts.password && (
          <Form.Text className="text-muted">{alerts.password}</Form.Text>
        )}
      </Form.Group>
      <Button variant="primary" type="submit" className="form-submit-button">
        Log in
      </Button>
    </Form>
  );
}
