import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:9000/api/users/alldata', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setUsers(response.data.users);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mt-5">
            <div className="p-5 rounded shadow" style={{width: '80%', margin: 'auto', border: '1px solid #185067', backgroundColor: '#e0f7fa'}}>
                <h1 className="text-center mb-4">User Details</h1>
                <table className="table table-striped table-bordered" style={{backgroundColor: '#add8e6'}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.username}</td>
                                <td>{new Date(user.dateofbirth).toLocaleDateString()}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;