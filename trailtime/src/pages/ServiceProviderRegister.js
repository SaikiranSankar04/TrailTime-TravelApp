// pages/ServiceProviderRegister.js
/*
import React, { useState } from 'react';

const ServiceProviderRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        companyName: '',
        location: '',
    });

    const [isLogin, setIsLogin] = useState(false); // State to toggle between login and registration
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLogin ? '/login-service-provider' : '/register-service-provider';
        try {
            const response = await fetch(`http://localhost:3001${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                alert(isLogin ? 'Login successful!' : 'Registration successful!');
                // Redirect to the dashboard or listings
                window.location.href = '/dashboard'; // Redirect to the dashboard
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Operation failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during operation:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="registration-page">
            <h2>{isLogin ? 'Service Provider Login' : 'Service Provider Registration'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company Name"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </>
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            {message && <p style={{ color: 'red' }}>{message}</p>}
            <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer', color: 'blue' }}>
                {isLogin ? 'Not a member? Register here' : 'Already a member? Login here'}
            </p>
        </div>
    );
};

export default ServiceProviderRegister;
*/
import React, { useState } from 'react';

const ServiceProviderRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        companyName: '',
        location: '',
    });

    const [isLogin, setIsLogin] = useState(false); // State to toggle between login and registration
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLogin ? '/login-service-provider' : '/register-service-provider';
        try {
            const response = await fetch(`http://localhost:3001${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                alert(isLogin ? 'Login successful!' : 'Registration successful!');
                // Store the unique service provider ID in local storage
                localStorage.setItem('serviceProviderId', data.serviceProviderId); // Store the ID here
                window.location.href = '/dashboard'; // Redirect to the dashboard
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Operation failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during operation:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="registration-page">
            <h2>{isLogin ? 'Service Provider Login' : 'Service Provider Registration'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company Name"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </>
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            {message && <p style={{ color: 'red' }}>{message}</p>}
            <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer', color: 'blue' }}>
                {isLogin ? 'Not a member? Register here' : 'Already a member? Login here'}
            </p>
        </div>
    );
};

export default ServiceProviderRegister;
