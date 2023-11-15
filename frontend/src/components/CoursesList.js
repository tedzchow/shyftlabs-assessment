import React, { useState, useEffect } from 'react';

const CoursesList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const apiUrl = `${process.env.REACT_APP_API_URL}/api/courses`;
                const response = await fetch(apiUrl);

                if (response.ok) {
                    const data = await response.json();
                    setCourses(data);
                } else {
                    console.error('Error fetching courses:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const handleDelete = async (id) => {
        try {
            const apiUrl = `${process.env.REACT_APP_API_URL}/api/courses/${id}`;
            const response = await fetch(apiUrl, { method: 'DELETE' });

            if (response.ok) {
                setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
                alert('Course deleted successfully!');
            } else {
                alert('Failed to delete course. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting course:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Courses List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <td>{course.name}</td>
                            <td>
                                <button onClick={() => handleDelete(course.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CoursesList;