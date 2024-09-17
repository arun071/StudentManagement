import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Components/Loading';


export default function ViewData() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // const url = import.meta.env.VITE_API_URL;
    const url = import.meta.env.VITE_AWS_API_URL;

    const navigate = useNavigate();

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        try {

            const response = await axios.get(`${url}/students`);
            console.log("Loading is working");
            setLoading(false)
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleNavUpdate = (id) => {
        navigate(`/update/${id}`); // Navigate to /update/:id
    };

    const handleNavAddStudent = () => {
        navigate(`/add-student`); // Navigate to /update/:id
    };




    const handleDelete = async (id) => {
        try {
            await axios.delete(`${url}/students/${id}`);
            await fetchData();
            toast.warning('Delete was successful!', {
                autoClose: 3000, // Close after 3 seconds
            });

        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (<>
        {loading ? (
            <Loading loading={loading} />

        ) : (
            <div className='p-2'>
        <div className="container bg-light px-5 my-5 rounded shadow-lg">

                    <h1 className='text-center mt-5 my-4 display-3 text-dark'>Student List</h1>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered">
                            <thead className="thead-primary">
                                <tr>
                                    <th scope="col">S.id</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">ZipCode</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.studentId}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.city}</td>
                                        <td>{item.state}</td>
                                        <td>{item.zipCode}</td>
                                        <td>
                                            <div>
                                                <button
                                                    className='btn btn-success m-2'
                                                    onClick={() => handleNavUpdate(item.studentId)}
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    className='btn btn-danger m-2'
                                                    onClick={() => handleDelete(item.studentId)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <button onClick={handleNavAddStudent} className="btn btn-primary btn-lg rounded-circle add-button ">
                        +
                    </button>
                    <ToastContainer />
                </div>
            </div>)}
    </>
    );
}
