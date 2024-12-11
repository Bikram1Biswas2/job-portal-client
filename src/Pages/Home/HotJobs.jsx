import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const HotJobs = () => {

    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

    return (
        <div>
            <div>
                {
                  jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;