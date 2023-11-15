import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import AddNewStudents from './components/AddNewStudents';
import StudentsList from './components/StudentsList';
import AddNewCourses from './components/AddNewCourses';
import CoursesList from './components/CoursesList';
import AddNewResults from './components/AddNewResults';
import ResultsList from './components/ResultsList';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add-new-students" element={<AddNewStudents />} />
                        <Route path="/students-list" element={<StudentsList />} />
                        <Route path="/add-new-courses" element={<AddNewCourses />} />
                        <Route path="/courses-list" element={<CoursesList />} />
                        <Route path="/add-new-results" element={<AddNewResults />} />
                        <Route path="/results-list" element={<ResultsList />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
