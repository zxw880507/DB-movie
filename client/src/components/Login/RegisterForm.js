import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
export default function RegisterForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    repassword: "",
  });
  const [isWarning, setIswarning] = useState({
    email: false,
    password: false,
    repassword: false,
  });
  const changeInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.dataset.type]: e.target.value }));
  };

  const checkIsWarning = () => {
    const setByRegex = (regex, type) => {
      setIswarning((prev) => ({
        ...prev,
        [type]: !regex.test(input[type]),
      }));
    };
    for (let type in input) {
      switch (type) {
        case "email":
          setByRegex(/^\S+@\S+\.\S+$/, type);
          break;
        case "password":
          setByRegex(/^.{6,}/, type);
          break;
        case "repassword":
          setByRegex(new RegExp(`^${input.password}$`), type);
          break;
        default:
          break;
      }
    }
  };

  return (
    <Form
      className="form-card"
      onSubmit={(e) => {
        e.preventDefault();
        checkIsWarning();
        if (Object.keys(isWarning).every((key) => !isWarning[key])) {
          console.log("submit successfully");
        }
      }}
    >
      <Form.Floating className="mb-3 control-register">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          data-type="email"
          autoComplete="off"
          onChange={changeInput}
          onBlur={checkIsWarning}
        />
        <label htmlFor="floatingInputCustom">Email address</label>
        {isWarning.email && (
          <Form.Text className="text-muted">
            You have entered an invalid email
          </Form.Text>
        )}
      </Form.Floating>
      <Form.Floating className="mb-3 control-register">
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
          data-type="password"
          autoComplete="off"
          onChange={changeInput}
          onBlur={checkIsWarning}
        />
        <label htmlFor="floatingPasswordCustom">Password</label>

        {isWarning.password && (
          <Form.Text className="text-muted">
            Password must be at least 6 characters
          </Form.Text>
        )}
      </Form.Floating>
      <Form.Floating className="mb-3 control-register">
        <Form.Control
          id="floatingRePasswordCustom"
          type="password"
          placeholder="Confirm Password"
          data-type="repassword"
          autoComplete="off"
          onChange={changeInput}
          onBlur={checkIsWarning}
        />
        <label htmlFor="floatingPasswordCustom">Confirm Password</label>
        {isWarning.repassword && (
          <Form.Text className="text-muted">Password does not match</Form.Text>
        )}
      </Form.Floating>

      <Button variant="primary" type="submit" className="form-submit-button">
        Create account
      </Button>
    </Form>
  );
}
