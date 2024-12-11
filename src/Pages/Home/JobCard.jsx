import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    const{_id,category,company,company_logo,description,jobType,location,salaryRange,title,requirements}=job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <div className='flex items-center gap-2'>
        <figure>
          <img className='w-16'
            src={company_logo}
            alt="Shoes" />
        </figure>
        <div>
            <h2>{company}</h2>
            <p className='flex items-center gap-1'><MdLocationOn />{location}</p>
        </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title} <div className="badge badge-secondary">NEW</div></h2>
          <p>{description}</p>
          <div className='flex gap-2 flex-wrap'>
            {
             requirements.map(requirement=><p className='border p-1 rounded-lg hover:text-purple-900 hover:bg-gray-300 hover:cursor-pointer text-center'>{requirement}</p>)
            }
          </div>
          <div className="card-actions justify-end items-center">
            <p className='flex items-center'>Salary:<BsCurrencyDollar /> {salaryRange.min}-{salaryRange.max}</p>
           <Link to={`/jobs/${_id}`}>
           <button className="btn btn-primary">Apply</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default JobCard;