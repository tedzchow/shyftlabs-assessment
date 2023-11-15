import React, { useState, useEffect } from 'react';

const StudentsList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const apiUrl = `${process.env.REACT_APP_API_URL}/api/students`;
                const response = await fetch(apiUrl);

                if (response.ok) {
                    const data = await response.json();
                    setStudents(data);
                } else {
                    console.error('Error fetching students:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    const handleDelete = async (id) => {
        try {
            const apiUrl = `${process.env.REACT_APP_API_URL}/api/students/${id}`;
            const response = await fetch(apiUrl, { method: 'DELETE' });

            if (response.ok) {
                setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
                alert('Student deleted successfully!');
            } else {
                alert('Failed to delete student. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting student:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Students List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name & Family Name</th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.firstName} {student.familyName}</td>
                            <td>{student.dob}</td>
                            <td>{student.email}</td>
                            <td>
                                <button onClick={() => handleDelete(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentsList;