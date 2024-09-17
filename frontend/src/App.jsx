import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewData from './Pages/ViewData';
import UpdateStudent from './Pages/UpdateDetails';
import RegistrationForm from './Pages/RegistrationForm';
import NotFoundPage from './Pages/PageNotFound';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ViewData />} />
                <Route path="/add-student" element={<RegistrationForm />} />
                <Route path="/update/:id" element={<UpdateStudent />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
