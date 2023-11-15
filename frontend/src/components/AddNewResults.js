import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddNewResults = () => {
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState([]);
    const scores = ['A', 'B', 'C', 'D', 'E', 'F'];

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/courses`)
            .then((response) => response.json())
            .then((data) => setCourses(data))
            .catch((error) => console.error('Error fetching courses:', error));

        fetch(`${process.env.REACT_APP_API_URL}/api/students`)
            .then((response) => response.json())
            .then((data) => setStudents(data))
            .catch((error) => console.error('Error fetching students:', error));
    }, []);

    const onSubmit = async (data) => {
        try {
            const apiUrl = `${process.env.REACT_APP_API_URL}/api/results`;

            data.student = parseInt(data.student, 10);
            data.course = parseInt(data.course, 10);

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('New Result Added:', data);
                alert('New Result added successfully!');
                reset();
            } else {
                console.error('Failed to add new result:', response.statusText);
                alert('Failed to add new result. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add New Result</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Course Name</label>
                    <Controller
                        name="course"
                        control={control}
                        rules={{ required: 'Course name is required' }}
                        render={({ field }) => (
                            <select {...field}>
                                {courses.map((course) => (
                                    <option key={course.id} value={course.id}>
                                        {course.name}
                                    </option>
                                ))}
                            </select>
                        )}
                    />
                    {errors.course && <p>{errors.course.message}</p>}
                </div>

                <div>
                    <label>Student Name</label>
                    <Controller
                        name="student"
                        control={control}
                        rules={{ required: 'Student name is required' }}
                        render={({ field }) => (
                            <select {...field}>
                                {students.map((student) => (
                                    <option key={student.id} value={student.id}>
                                        {student.name}
                                    </option>
                                ))}
                            </select>
                        )}
                    />
                    {errors.student && <p>{errors.student.message}</p>}
                </div>

                <div>
                    <label>Score</label>
                    <Controller
                        name="score"
                        control={control}
                        rules={{ required: 'Score is required' }}
                        render={({ field }) => (
                            <select {...field}>
                                {scores.map((score) => (
                                    <option key={score} value={score}>
                                        {score}
                                    </option>
                                ))}
                            </select>
                        )}
                    />
                    {errors.score && <p>{errors.score.message}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNewResults;