import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const AddJob = () => {
    const navigate = useNavigate()
    const {user}= useAuth()

    const handleAddJob = e =>{
        e.preventDefault()

        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        const {min,max,currency, ...newJob} = initialData
        newJob.salaryRange = {min,max,currency}
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(initialData,newJob);

        fetch('http://localhost:5000/jobs',{
             method:"POST",
             headers:{
                'content-type':'application/json'
             },
             body:JSON.stringify(newJob)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast.success('New Job Added Successfully')
            navigate('/myPostedJobs')
        })
    }

    return (
        <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Add Job</h2>
        <form onSubmit={handleAddJob} className="space-y-4">
          <div>
            <label className="block font-medium">Job Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Location</label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Job Type</label>
            <select
              name="jobType"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Job Type</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
            </select>
          </div>
  
          <div>
            <label className="block font-medium">Category</label>
            <input
              type="text"
              name="category"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Application Deadline</label>
            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Salary Range</label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="min"
                placeholder="Min"
                className="input input-bordered w-1/2"
                required
              />
              <input
                type="number"
                name="max"
                placeholder="Max"
                className="input input-bordered w-1/2"
                required
              />
                <select
            name="currency"
            className="select select-bordered w-full mt-2"
            required
          >
            <option value="">Select Currency</option>
            <option value="INR">India (INR)</option>
            <option value="BDT">Bangladesh (BDT)</option>
            <option value="USD">United States (USD)</option>
            <option value="AED">Dubai (AED)</option>
          </select>
            </div>
          </div>
  
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>
  
          <div>
            <label className="block font-medium">Company</label>
            <input
              type="text"
              name="company"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Requirements (Comma Separated)</label>
            <textarea
            name="requirements"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
          </div>
  
          <div>
            <label className="block font-medium">Responsibilities (Comma Separated)</label>
            <textarea
              type="text"
              name="responsibilities"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">HR Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              name="hr_email"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">HR Name</label>
            <input
              type="text"
              name="hr_name"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Company Logo URL</label>
            <input
              type="url"
              name="company_logo"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          <button type="submit" className="btn btn-secondary w-full mt-4 text-2xl font-bold text-white">
            Add Job
          </button>
        </form>
      </div>
    );
};

export default AddJob;