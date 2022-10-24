import { useState } from "react";
// import InterswitchAcademyLogo from "../../assets/InterswitchAcademyLogo.png"
import { Link, useNavigate } from "react-router-dom";
// import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import "../../assets/css/form.css";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        navigate('/dashboard')
        console.log(data)};
  
    return (
        <div className="registration-div">
          {/* <img src={InterswitchAcademyLogo} alt="" /> */}
            <form  onSubmit={onSubmit}>
            
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Email:</label>
                <input
                    type="text"
                    {...register("email", {required: "Please fill in your email",
                    minLength: {
                  
                }
                })}
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Password:</label>
                <input
                    type="password"

                   
                />

                {/* <Button value='Login' styleClass='blue-button'></Button> */}
                <button className="submitButton">Login</button>
                <div>Don't have an account?  <Link to="/apply"><div className="click"> Click here to Register</div></Link></div>
            </form>
        </div>
    );
}

export default Login;