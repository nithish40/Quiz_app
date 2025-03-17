import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/login.css';

function Loginform() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function checkDetails(event) {
    event.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name: username, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setSuccess("Login successful!");
        setError('');
        setTimeout(() => {
          navigate(`/user/${data.username}`);
        }, 1000);
      } else {
        setError(data.message || "Invalid username or password.");
        setSuccess('');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('Error during login');
      setSuccess('');
    }
  }

  return (
    <div>
      <nav>
        <h2>Career Sync</h2>
      </nav>
      <div className="outerlogin">
        <form className="login" onSubmit={checkDetails}>
          <h2 className="bgclr">Signin</h2>
          <input
            type="text"
            placeholder="email or username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="loginbtn" type="submit">Login</button>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </form>
      </div>
    </div>
  );
}

export default Loginform;
