import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

type FormData = {
    username: string;
    password: string;
};

const FunctionalForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        // Call backend API
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('username', { required: 'Username is required' })}
                placeholder="Username"
            />
            {errors.username && <p>{errors.username.message}</p>}

            <input
                type="password"
                {...register('password', { required: 'Password is required' })}
                placeholder="Password"
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">Submit</button>
        </form>
    );
};

export default FunctionalForm;
