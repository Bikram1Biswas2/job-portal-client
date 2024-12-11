import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const {category,jobType} = useLoaderData()

    return (
        <div>
            <h2>Job Details:{category}</h2>
            <p>{jobType}</p>
            <button>Apply</button>
        </div>
    );
};

export default JobDetails;