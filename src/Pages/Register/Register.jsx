import Lottie from "lottie-react";
import registerLottie from '../../assets/lottie/register.json'
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";

const Register = () => {
  const {createUser} = useContext(AuthContext)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    const handleRegister = e =>{
        e.preventDefault()

        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 
        console.log(email,password);

        const validatePassword = (password) => passwordRegex.test(password);

        if (!validatePassword(password)) {
            alert("Password must be at least 6 characters long, include one uppercase letter, and one number.");
            return;

    }

    createUser(email,password)
    .then(result =>{
      console.log(result.user);
      
    })
    .catch(error=>{
      console.log(error.message);
    })
}

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
         
         <Lottie animationData={registerLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pl-6">
        <h1 className="text-5xl font-bold ">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Register;
