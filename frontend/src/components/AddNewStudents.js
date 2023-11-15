import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddNewStudents = () => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const birthDate = new Date(data.dateOfBirth);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();

            if (age < 10) {
                alert('Student must be at least 10 years old.');
                return;
            }

            const apiUrl = `${process.env.REACT_APP_API_URL}/api/students`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('New Student Added:', data);
                alert('New student added successfully!');
                reset();
            } else {
                console.error('Failed to add new student:', response.statusText);
                alert('Failed to add new student. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add New Students</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>First Name</label>
                    <Controller
                        defaultValue=""
                        name="name"
                        control={control}
                        rules={{ required: 'Name is required' }}
                        render={({ field }) => <input {...field} />}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div>
                    <label>Family Name</label>
                    <Controller
                        defaultValue=""
                        name="familyName"
                        control={control}
                        rules={{ required: 'Family name is required' }}
                        render={({ field }) => <input {...field} />}
                    />
                    {errors.familyName && <p>{errors.familyName.message}</p>}
                </div>

                <div>
                    <label>Date of Birth</label>
                    <Controller
                        defaultValue=""
                        name="dob"
                        control={control}
                        rules={{
                            required: 'Date of birth is required',
                            validate: (value) => {
                                const birthDate = new Date(value);
                                const today = new Date();
                                const age = today.getFullYear() - birthDate.getFullYear();
                                return age >= 10 || 'Student must be at least 10 years old.';
                            },
                        }}
                        render={({ field }) => <input type="date" {...field} />}
                    />
                    {errors.dob && <p>{errors.dob.message}</p>}
                </div>

                <div>
                    <label>Email Address</label>
                    <Controller
                        defaultValue=""
                        name="email"
                        control={control}
                        rules={{
                            required: 'Email address is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        }}
                        render={({ field }) => <input {...field} />}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNewStudents;