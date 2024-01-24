import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useSignUp from "../../Hooks/useSignUp";
import "./SignUp.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // get the location user try to go
  const location = useLocation();
  // get the path name
  const from = location.state?.from?.pathname || "/";
  // navigate user to the correct route
  const navigate = useNavigate();
  const { signUp, loading, error } = useSignUp();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await signUp(data);
    navigate(from);
    reset();
  };

  return (
    <div className="form-container">
      <form className="sign-form work-sans" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <label className="mb-3" htmlFor="fullName">
            Full Name
          </label>
          <div className="flex items-center justify-between">
            <span className="mr-3 form-icon">
              <FaUserAlt></FaUserAlt>
            </span>
            <input
              type="text"
              {...register("fullName", { required: true })}
              placeholder="Your Name"
            />
          </div>
        </div>
        {errors.fullName && (
          <span className="text-red-500">Name is required</span>
        )}

        <div className="input-container">
          <label className="mb-3" htmlFor="email">
            Email Address
          </label>
          <div className="flex items-center justify-between">
            <span className="mr-3 form-icon">
              <MdEmail></MdEmail>
            </span>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="example@gamil.com"
            />
          </div>
        </div>
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}

        <div className="input-container">
          <label className="mb-3" htmlFor="phoneNumber">
            Phone Number
          </label>
          <div className="flex items-center justify-between">
            <span className="mr-3 form-icon">
              <MdEmail></MdEmail>
            </span>
            <input
              type="text"
              {...register("phoneNumber", { required: true })}
              placeholder="+88012456356743"
            />
          </div>
        </div>
        {errors.phoneNumber && (
          <span className="text-red-500">Phone Number is required</span>
        )}

        <div className="input-container">
          <label className="mb-3" htmlFor="role">
            Sign Up as
          </label>
          <div className="flex items-center justify-between">
            <span className="mr-3 form-icon">
              <MdEmail></MdEmail>
            </span>
            <select
              {...register("role", { required: true })}
              className="w-full outline-transparent"
            >
              <option>owner</option>
              <option>renter</option>
            </select>
          </div>
        </div>
        {errors.role && <span className="text-red-500">Role is required</span>}

        <div className="input-container">
          <label className="mb-3" htmlFor="password">
            Password
          </label>
          <div className="flex items-center justify-between">
            <span className="mr-3 form-icon">
              <RiLockPasswordFill></RiLockPasswordFill>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              placeholder="Password"
            />

            <span
              className="ml-3 cursor-pointer form-icon"
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Hide Password" : "Show Password"}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
        </div>
        {errors.password && (
          <span className="text-red-500">Password id required</span>
        )}

        <div className="input-container">
          <label className="mb-3" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="flex items-center justify-between">
            <span className="mr-3 form-icon">
              <RiLockPasswordFill></RiLockPasswordFill>
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: true,
                validate: (val) => {
                  if (watch("password") !== val)
                    return "Your passwords do no match";
                },
              })}
              placeholder="Confirm password"
            />
            <span
              className="ml-3 cursor-pointer form-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              title={showConfirmPassword ? "Hide Password" : "Show Password"}
            >
              {showConfirmPassword ? (
                <FaEyeSlash></FaEyeSlash>
              ) : (
                <FaEye></FaEye>
              )}
            </span>
          </div>
        </div>
        {errors.confirmPassword && (
          <span className="text-red-500">Confirm your password</span>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-accent-color text-primary-color py-5 text-center rounded-2xl text-3xl cursor-pointer flex justify-center items-center w-full font-medium"
        >
          Sign Up
          <span className="ml-5">
            <PiSignInBold></PiSignInBold>
          </span>
        </button>

        <div className="mt-10">
          Already have an account? <Link to={"/login"}>Login</Link>
        </div>

        {error && <span className="text-red-500">sign up failed</span>}
      </form>
    </div>
  );
};

export default SignUp;
