import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';

export default function UpdateDetails() {
    const [loading, setLoading] = useState(true);    
    // const url = import.meta.env.VITE_API_URL;
    const url = import.meta.env.VITE_AWS_API_URL;
    const { id } = useParams(); // Get the id from the route parameter
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        dateOfRegistration: "",
        status: "",
        photoUrl: "",

    });

    const navigate = useNavigate(); // For redirecting after successful update

    useEffect(() => {
        // Fetch the existing data for the student by id
        const fetchStudent = async () => {
            try {

                const response = await axios.get(`${url}/students/${id}`);
                setFormData(response.data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching student:', error);
            }
        };
        fetchStudent();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${url}/students/${id}`, formData);
            navigate('/'); // Redirect to the main page after update
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    return (
        loading?<Loading/>:
        <div className="container bg-light px-5 my-5 rounded shadow-lg">
            <h1 className='h1 text-center'>Update Student </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className="form-control"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className="form-control"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                        className="form-control"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="gender">Gender</label>
                    <input
                        className="form-control"
                        name="gender"
                        placeholder="Gender"
                        value={formData.gender}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        className="form-control"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="address">Address</label>
                    <input
                        className="form-control"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="city">City</label>
                    <input
                        className="form-control"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="state">State</label>
                    <input
                        className="form-control"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        className="form-control"
                        name="zipCode"
                        placeholder="Zip Code"
                        value={formData.zipCode}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="dateOfRegistration">Date of Registration</label>
                    <input
                        className="form-control"
                        name="dateOfRegistration"
                        type="date"
                        value={formData.dateOfRegistration}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="status">Status (Active/Inactive)</label>
                    <input
                        className="form-control"
                        name="status"
                        placeholder="Status"
                        value={formData.status}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="photoUrl">Photo URL</label>
                    <input
                        className="form-control"
                        name="photoUrl"
                        placeholder="Photo URL"
                        value={formData.photoUrl}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary my-5">
                    Update Student
                </button>
            </form>
        </div>
    );
}
