import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import "../../assets/css/form.css";

const Apply = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="registration-div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          {...register("firstName", {
            required: "Please fill in your first name",
            minLength: {
              value: 4,
              message: "The minimum first name length is 4",
            },
          })}
        />
        <p className="errors">{errors.firstName?.message}</p>
       
        <label>Last Name:</label>
        <input
          type="text"
          name="lastNmae"
          id="lastName"
          {...register("lastName", {
            required: "Please fill in your Last name",
            minLength: {
              value: 4,
              message: "The minimum last name length is 4",
            },
          })}
        />
        <p className="errors">{errors.lastName?.message}</p>
        
        {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
        <label>Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          {...register("email", {
            required: "Please fill in your Email",
            minLength: {
              value: 4,
              message: "Invalid Mail",
            },
          })}
        />
        <p className="errors">{errors.email?.message}</p>

        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNo"
          id="phoneNo"
          {...register("phoneNo", {
            required: "Please fill in your Phone Number",
            minLength: {
              value: 4,
              message: "Invalid Phone Number",
            },
          })}
        />
        <p className="errors">{errors.phoneNo?.message}</p>

        <label>Date Of Birth:</label>
        <input
          type="date"
          name="dateofbirth"
          id="dateofbirth"
          {...register("dateofbirth", {
            required: "Please fill in your Date of Birth",
            minLength: {
              value: 4,
              message: "Invalid Date",
            },
          })}
        />
        <p className="errors">{errors.dateofbirth?.message}</p>

        <label for="training_track">Gender:</label>
        <select
          name="gender"
          id="gender"
          {...register("gender", {
            required: "Please Pick Your Gender",
            minLength: {
              value: 4,
              message: "Invalid Value",
            },
          })}
        >
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <p className="errors">{errors.gender?.message}</p>

        <label for="class_of_degree">Religion:</label>
        <select
          name="religion"
          id="religion"
          {...register("religion", {
            required: "Please Pick Your Religion",
            minLength: {
              value: 4,
              message: "Invalid Value",
            },
          })}
        >
          <option value=""></option>
          <option value="Christainity">Christainity</option>
          <option value="Islam">Islam</option>
          <option value="others">Others</option>
        </select>
        <p className="errors">{errors.religion?.message}</p>

        <label>Nationality:</label>
        <input
          type="text"
          name="nationality"
          id="nationality"
          {...register("nationality", {
            required: "Please fill in your Nationality",
            minLength: {
              value: 4,
              message: "Invalid Nationality",
            },
          })}
        />
        <p className="errors">{errors.nationality?.message}</p>

        <label>Address:</label>
        <input
          type="text"
          name="address"
          id="address"
          {...register("address", {
            required: "Please fill in your Address",
            minLength: {
              value: 4,
              message: "Invalid Address",
            },
          })}
        />
        <p className="errors">{errors.address?.message}</p>

        <label for="training_track">Position Available:</label>
        <select
          name="positionAvailable"
          id="positionAvailable"
          {...register("positionAvailable", {
            required: "Please Your Job Interest",
            minLength: {
              value: 4,
              message: "Invalid Value",
            },
          })}
        >
          <option value=""></option>
          <option value="Purchase Manager">Purchase Manager</option>
          <option value="Chef">Chef</option>
        </select>
        <p className="errors">{errors.positionAvailable?.message}</p>

        <button className="submitButton">Submit</button>
        <div>
          Already have an account?{" "}
          <Link to="/login">
            <div className="click">Click here to Login</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Apply;
