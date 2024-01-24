import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import useLogOut from "../Hooks/useLogOut";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { logOut } = useLogOut();
  const handleLogout = () => {
    logOut();
  };

  return (
    <nav className="flex justify-center items-center py-6 max-w-screen-md mt-10 mx-6 md:mx-auto rounded-3xl relative nav-shadow">
      <div className="text-3xl font-normal hidden sm:block">
        <Link className="mx-6" to={"/"}>
          Home
        </Link>
        <Link className="mx-6" to={"/login"}>
          Login
        </Link>
        <Link className="mx-6" to={"/sign-up"}>
          Sign-up
        </Link>
        <Link className="mx-6" to={"/dashboard"}>
          dashboard
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {open && (
        <div className="absolute top-[100%] right-[5%] flex flex-col mt-4 py-3 px-10 text-[1.8rem] font-normal rounded-3xl nav-shadow">
          <Link className="my-2" to={"/"}>
            Home
          </Link>
          <Link className="my-2" to={"/login"}>
            Login
          </Link>
          <Link className="my-2" to={"/sign-up"}>
            Sign-up
          </Link>
          <Link className="my-2" to={"/dashboard"}>
            dashboard
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      <div
        onClick={() => setOpen(!open)}
        className="flex justify-end w-full mx-10 sm:hidden text-3xl"
      >
        {open ? <GrClose></GrClose> : <FaBars></FaBars>}
      </div>
    </nav>
  );
};

export default Navbar;
