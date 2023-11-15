import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/add-new-students">Add New Students</Link>
            <Link to="/students-list">Students List</Link>
            <Link to="/add-new-courses">Add New Courses</Link>
            <Link to="/courses-list">Courses List</Link>
            <Link to="/add-new-results">Add New Results</Link>
            <Link to="/results-list">Results List</Link>
        </div>
    );
};

export default Sidebar;
