import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import './Login.scss';

export const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   console.log('email', email, 'password', password, 'confirmedPassword', confirmedPassword);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevent the default form submission behavior

  //   // Here, you can send the form data to your backend using a fetch or axios request
  //   fetch('http://localhost:2001/auth/register', {
  //     method: 'POST',
  //     body: JSON.stringify({ email, username, password, confirmedPassword }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then((response) => {
  //       // Handle the response from the backend
  //       if (response.status === 200) {
  //         // Registration successful, you can redirect or show a success message
  //       } else {
  //         // Registration failed, handle errors
  //       }
  //     })
  //     .catch((error) => {
  //       // Handle network errors
  //       console.log('form error ', error);
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/test', email.length);

      if (response.ok) {
        console.log('Data sent successfully');
      } else {
        console.error('Error sending data');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="user-details-form">
      <h1>Signup</h1>
      <Form action="/auth/register" method="POST">
        <Form.Group controlId="signup">
          <Form.Label>Email Adress</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            required
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="Password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
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
        {/* <Button type="submit">Submit</Button> */}
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
