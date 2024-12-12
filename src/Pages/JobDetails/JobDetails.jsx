import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id,category, jobType } = useLoaderData();

  return (
    <div>
      <h2>Job Details:{category}</h2>
      <p>{jobType}</p>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-secondary">Apply</button>
      </Link>
    </div>
  );
};

export default JobDetails;
