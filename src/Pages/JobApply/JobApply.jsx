import Lottie from 'lottie-react';
import jobLottie from '../../assets/lottie/jobApply.json'
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
const JobApply = () => {
   const navigate = useNavigate()
    const {id}= useParams()
    const {user}= useAuth()
    console.log(user);

    const handleJobApply = e =>{
        e.preventDefault()

        const form = e.target 
        const linkedin = form.linkedin.value
        const github = form.github.value
        const resume = form.resume.value

        console.log(linkedin,github,resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume
        }
        fetch('http://localhost:5000/job-applications',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                toast.success('Successfully Apply!')
                navigate('/myApplications')
            }
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Apply now!</h1>
          <Lottie className='w-72' animationData={jobLottie}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleJobApply} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">LinkedIn</span>
                </label>
                <input type="url" name='linkedin' placeholder="LinkedIn URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">GitHub</span>
                </label>
                <input type="url" name='github' placeholder="GitHub URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resume URL</span>
                </label>
                <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Apply</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default JobApply;