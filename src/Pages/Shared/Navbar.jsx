import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import navbarLogo from "../../assets/logo.png"

const Navbar = () => {
  const { user,signOutUser } = useContext(AuthContext);

  const handleSignOut = ()=>{
    signOutUser()
    .then(()=>{
      console.log('Sign Out Successfully');
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }

  const items = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/myApplications'>My Applications</Link>
      </li>
      <li>
        <Link to='/addJob'>Add Job</Link>
      </li>
      <li>
        <Link to='/myPostedJobs'>My Posted Jobs</Link>
      </li>
     
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {items}
          </ul>
        </div>
        <img className="w-8" src={navbarLogo} alt="" />
        <a className="btn btn-ghost text-xl">Job-Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end space-x-3">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn">Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/register" className="btn">
              Register
            </Link>
            <Link to="/login" className="btn">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
