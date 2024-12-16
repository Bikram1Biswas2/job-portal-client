import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

const UseAxiosSecure = () => {
    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const interceptor = axiosInstance.interceptors.response.use(
            response => {
                return response; // Return response if there is no error
            },
            error => {
                console.log("Error caught in interceptor:", error);

                // Check for unauthorized or forbidden errors
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    signOutUser()
                        .then(() => {
                            console.log("Logged out user");
                            navigate("/login"); // Redirect to login page
                        })
                        .catch(error => {
                            console.error("Error during sign-out:", error);
                        });
                }

                return Promise.reject(error); // Reject the error to propagate it
            }
        );

        // Cleanup the interceptor on component unmount
        return () => {
            axiosInstance.interceptors.response.eject(interceptor);
        };
    }, []);

    return axiosInstance;
};

export default UseAxiosSecure;
