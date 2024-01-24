import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // get the location user try to go
  const location = useLocation();
  // get the path name
  const from = location.state?.from?.pathname || "/";
  // navigate user to the correct route
  const navigate = useNavigate();
  const { login, loading, error } = useLogin();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await login(data);
    navigate(from);
    reset();
  };

  return (
    <div className="form-container">
      <form className="sign-form work-sans" onSubmit={handleSubmit(onSubmit)}>
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
              title={showPassword ? "Hide Password" : "Show Password"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
        </div>
        {errors.password && (
          <span className="text-red-500">Password is required</span>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-accent-color text-primary-color py-5 text-center rounded-2xl text-3xl cursor-pointer flex justify-center items-center w-full font-medium"
        >
          Sign In
          <span className="ml-5">
            <PiSignInBold></PiSignInBold>
          </span>
        </button>

        <div className="mt-10">
          Do not have an account? <Link to={"/sign-up"}>Sign Up</Link>
        </div>
      </form>

      {error && <span className="text-red-500">login failed</span>}
    </div>
  );
};

export default Login;
