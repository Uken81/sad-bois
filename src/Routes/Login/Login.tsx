import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('email', email, 'password', password);
  };

  return (
    <div className="user-details-form">
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="signin">
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
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <div>
        <Link to="/signup">Register</Link>
      </div>
    </div>
  );
};
