import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import './Login.scss';

export const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('email', email, 'password', password, 'confirmedPassword', confirmedPassword);
  };

  return (
    <div className="user-details-form">
      <h1>Signup</h1>
      <Form>
        <Form.Group controlId="signup">
          <Form.Label>Email Adress</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="Password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
            required
          />
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="Password"
            placeholder="Enter Password"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
