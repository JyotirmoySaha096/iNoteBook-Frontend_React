import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { redirect, useNavigate } from "react-router-dom";

function Signup() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setUserInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleOnClick = async (e) => {
    e.preventDefault();
    if (userInfo.password == userInfo.cpassword) {
      // console.log(userInfo);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userInfo.name,
          email: userInfo.email,
          password: userInfo.password,
        }),
      };
      let res = await fetch('http://localhost:3001/api/auth/createuser', requestOptions);
      let data = await res.json();
      // console.log(data);
      if(data.success){
        localStorage.setItem('userToken',data.userToken);
        navigate("/");
      }
    } else console.log("Password and Confirm password should be same.");
  };
  return (
    <Container className="my-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={handleOnChange}
            value={userInfo.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleOnChange}
            value={userInfo.email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleOnChange}
            value={userInfo.password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Confirm Password"
            name="cpassword"
            onChange={handleOnChange}
            value={userInfo.cpassword}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          disabled={userInfo.password.length < 5 ? true : false}
          variant="primary"
          type="submit"
          onClick={handleOnClick}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
