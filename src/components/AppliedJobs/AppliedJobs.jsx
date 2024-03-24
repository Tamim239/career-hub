import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utilies/localStorage";
import { CiLocationArrow1, CiDollar } from "react-icons/ci";
export const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(appliedJobs);
    }
  }, [appliedJobs, jobs]);

const handleFilter = (filter) =>{
  if(filter === 'all'){
    setDisplayJobs(appliedJobs)
  } 
  else if(filter === 'remote'){
    const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
    setDisplayJobs(remoteJobs)
  }
  else if(filter === 'onsite'){
    const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
    setDisplayJobs(onsiteJobs)
  }
}

  // console.log(displayJobs)
  return (
    <div>
      <h1 className="text-5xl text-center p-10">Applied Jobs</h1>
      <div className="flex justify-end">
        <details className="dropdown">
          <summary className="m-1 btn">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=> handleFilter('all')}> 
              <a>All</a>
            </li>
            <li onClick={()=> handleFilter('remote')}>
              <a>Remote</a>
            </li>
            <li onClick={()=> handleFilter('onsite')}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>

       <div>
          {
            displayJobs.map(job => <div key={job.id} className="flex justify-between gap-4 items-center my-10">
              <div className="flex gap-5">
              <img src={job.logo} alt="" className="w-40" />
               <div>
               <p>{job.job_title}</p>
               <p>{job.company_name}</p>
               <div className="*:flex *:items-center *:gap-4 flex items-center gap-5">
             <div>
             <h4><CiLocationArrow1 /></h4>
             <p>{job.location}</p>
             </div>
             <div>
             <h4><CiDollar /></h4>
             <p>Salary : {job.salary}</p>
             </div>
        </div>
              </div>

              </div>
             <div>
             <button  
              className="btn flex-grow bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">View Details</button>
             </div>
          
            </div>
              

            )
            
          }
        
       </div>
    </div>
  );
};
