import React, { useState, useEffect } from 'react';

const ResultsList = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const apiUrl = `${process.env.REACT_APP_API_URL}/api/results`;
                const response = await fetch(apiUrl);

                if (response.ok) {
                    const data = await response.json();
                    setResults(data);
                } else {
                    console.error('Error fetching results:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching results:', error);
            }
        };

        fetchResults();
    }, []);

    const handleDelete = async (id) => {
        try {
            const apiUrl = `${process.env.REACT_APP_API_URL}/api/results/${id}`;
            const response = await fetch(apiUrl, { method: 'DELETE' });

            if (response.ok) {
                setResults((prevResults) => prevResults.filter((result) => result.id !== id));
                alert('Result deleted successfully!');
            } else {
                alert('Failed to delete result. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting result:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Result List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Student Name</th>
                        <th>Score</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => (
                        <tr key={result.id}>
                            <td>{result.course.name}</td>
                            <td>{result.student.name} {result.student.familyName}</td>
                            <td>{result.score}</td>
                            <td>
                                <button onClick={() => handleDelete(result.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultsList;