import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate}  from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password
        };

        
            const response = await axios.post('http://localhost:9000/api/users/login', user);
            console.log(response.data);
            if(response.status === 201) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('name', response.data.name);
                localStorage.setItem('dob', response.data.dateofbirth);
                localStorage.setItem('email', response.data.email);
                
                navigate('/');
            }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: '100vh', backgroundColor: '#007bff'}}>
            <form onSubmit={handleSubmit} className="p-5 rounded shadow" style={{width: '300px', border: '1px solid #185067', backgroundColor: '#e0f7fa'}}>
                <h2 className="mb-4 text-center text-primary">Sign In</h2>
                <div className="d-flex justify-content-center mb-4">
                    <img src={process.env.PUBLIC_URL + '/user.png'} alt="User Logo" style={{width: '70px', height: '70px'}} />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary mt-3 text-center w-100">Login</button>
                <Link to="/register" className="btn btn-link mt-3 text-center w-100">New User? Register Here</Link>
            </form>
        </div>
    );
}

export default Login;