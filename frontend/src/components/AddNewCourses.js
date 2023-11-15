import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddNewCourses = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const apiUrl = `${process.env.REACT_APP_API_URL}/api/courses`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('New Course Added:', data);
                alert('New Course added successfully!');
                reset();
            } else {
                console.error('Failed to add new course:', response.statusText);
                alert('Failed to add new course. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add New Courses</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Course Name</label>
                    <Controller
                        defaultValue=""
                        name="name"
                        control={control}
                        rules={{ required: 'Course name is required' }}
                        render={({ field }) => <input {...field} placeholder="Enter Course Name" />}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNewCourses;