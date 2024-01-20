import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

import './LoginPage.css';

    const LoginPage = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate(); // Use useNavigate instead of useHistory
    
        const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if username and password match your criteria (replace with your authentication logic)
        if (username === 'user' && password === 'user') {
            // Navigate to the home page
            navigate('/home');
        } else {
            // Handle incorrect login (display an error message, etc.)
            console.log('Incorrect username or password');
        }
        };

    return (
        <section>
            <div className="color"></div>
            <div className="box">
            <div className="square" style={{ '--i': 0 }}></div>
            <div className="square" style={{ '--i': 1 }}></div>
            <div className="square" style={{ '--i': 2 }}></div>
            <div className="square" style={{ '--i': 3 }}></div>
            <div className="square" style={{ '--i': 4 }}></div>  
                <div className="container">
                    <div className="form">
                        <h2>Login Page</h2>
                        <form onSubmit={handleSubmit}>
                    <div className="inputBx">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </div>
                    <div className="inputBx">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div className="inputBx">
                    <input type="submit" value="Login" />
                    </div>
                            <p className="text">We would get back to you soon</p>
                            <p className="text">
                                Don't have an account? <a href="#">Click Here</a>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
