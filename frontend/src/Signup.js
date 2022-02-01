import {React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';

function SignUp() {
    const eye = <FaEye />
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
      <div className="">
    <h1>Sign Up</h1>
    <div className="signUpForm">
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>FULL NAME</label>
      <input type="text" placeholder="Enter your full name" size="57" {...register("name", {required: true, min: 3, maxLength: 40})} />

      <label>E-MAIL</label>
      <input type="text" placeholder="Name@email.com" size="57" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />

      <label>PASSWORD</label>
      <input type="password" placeholder="Create password" type={passwordShown ? "text" : "password"} size="57" {...register("password", {required: true, min: 8, maxLength: 72})} />
      
      <i onClick={togglePasswordVisiblity}>{eye}</i>
      <p>Between 8 and 72 Characters</p>
      <div><button type="submit" className="accountButton">Sign up for free</button></div>
    </form>
    </div>
    <div>Or</div>
    <div><button type="submit" className="externalButton">Continue with Google</button></div>
    <div><button type="submit" className="externalButton">Continue with Google</button></div>
    <div><p>Already have an account? Log in</p></div>
    </div>
    )
}

export default SignUp;