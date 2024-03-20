import React, { useState } from 'react';
import axios from 'axios';
import  {useNavigate,Link}  from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate();
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            username,
            dateofbirth: new Date(dob),
            email,
            password
        };

        
            const response = await axios.post('http://localhost:9000/api/users/register', user);
            alert(response.data.message);
            if(response.status === 201) {
                navigate('/login');
            }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: '100vh', backgroundColor: '#007bff'}}>
            <form onSubmit={handleSubmit} className="p-5 rounded shadow" style={{width: '300px', border: '1px solid #185067', backgroundColor: '#e0f7fa'}}>
                <h2 className="mb-4 text-center text-primary">Register</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" className="form-control" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                 <button type="submit" className="btn btn-primary mt-3 text-center w-100">Register</button>
                 <Link to="/login" className="btn btn-link mt-3 text-center w-100">Already have an account? Login Here</Link>
            </form>
        </div>
    );
}

export default Register;