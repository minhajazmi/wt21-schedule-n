import {React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from  'react-router-dom';

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
    <div className="signUpContainer">
    <h1>Sign Up</h1>
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Enter your full name" {...register("name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Name@email.com" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Create password" {...register("password", { min: 3})} />

      <input type="submit" />
    </form>
    <label>FULL NAME</label>

    </div>
    </div>
    )
}

export default SignUp;