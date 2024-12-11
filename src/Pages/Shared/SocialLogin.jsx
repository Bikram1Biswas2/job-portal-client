import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";


const SocialLogin = () => {

    const {signInWithGoogle} = useContext(AuthContext)

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <div className="m-4 mx-auto">
              <div className="divider">OR</div>
              <p>Login With</p>
            <button onClick={handleGoogleSignIn} className="btn mt-2">Google</button>
        </div>
    );
};

export default SocialLogin;