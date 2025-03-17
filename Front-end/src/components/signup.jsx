import React, { useState } from "react";
import axios from "axios";
import './styles/signup.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    function validateForm() {
        if (!username.trim()) {
            setError("Username is required");
            return false;
        }
        if (!validateEmail(email)) {
            setError("Invalid email address");
            return false;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return false;
        }
        if (password !== secondPassword) {
            setError('Passwords do not match');
            return false;
        }
        return true;
    }

    async function registration(event) {
        event.preventDefault();
        
        // Clear previous messages
        setError('');
        setSuccess('');
    
        // Validate form
        if (!validateForm()) {
            return;
        }
    
        try {
            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,  // Corrected this line
                    email: email,
                    password: password
                }),
            });
    
            const data = await response.json();
    
            if (data.success) {
                setSuccess("Registration successful");
                setError('');
                // Reset form
                setUsername('');
                setEmail('');
                setPassword('');
                setSecondPassword('');
                // Redirect to login page after delay
                setTimeout(() => {
                    window.location.href = "/login";
                }, 1500);
            } else {
                setError(data.message || "Registration failed");
                setSuccess('');
            }
        } catch (err) {
            console.error("Registration error:", err);
            setError('An error occurred during registration. Please try again.');
            setSuccess('');
        }
    }
    

    return (
        <div>
            <nav>
                <h2>Career Sync</h2>
            </nav>
            <div className="outersignup">
                <form className="signup" onSubmit={registration}>
                    <h2 className="bgclr">Signup</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        minLength="6"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        id="confirm-password"
                        value={secondPassword}
                        onChange={e => setSecondPassword(e.target.value)}
                        required
                    />
                    <button className="register" type="submit">
                        Submit
                    </button>
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                    <p>
                        Have an account? <a href="/login">Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;