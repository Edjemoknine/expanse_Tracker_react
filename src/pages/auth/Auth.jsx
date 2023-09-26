import React, { useContext, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useSelector } from "react-redux";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user } = useSelector((store) => store.tracker);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/tracker");
    } catch (error) {
      setError(error.message);
    }
  };
  const HandleGoogle = async () => {
    const googleAuth = new GoogleAuthProvider();
    await signInWithPopup(auth, googleAuth);
    navigate("/tracker");
  };

  const HandleRestPass = async () => {
    await sendPasswordResetEmail(auth, email).then((a) => {
      alert("Password reset email sent");
    });
  };
  // if (user) {
  //   return <Navigate to="/tracker" />;
  // }
  return (
    <div className="authentication">
      <div className="p-4 border">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            ></Form.Control>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </div>
        </Form>
        <div className="d-grid gap-2 mt-3">
          <GoogleButton onClick={HandleGoogle} />
        </div>
      </div>
      <div className="border mt-3 text-center pt-3">
        <p>
          Don't have an Account? <Link to={"/signup"}>Sign Up</Link>
        </p>
        <p>
          I Forget My{" "}
          <span className=" text-primary" onClick={HandleRestPass}>
            Password
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
