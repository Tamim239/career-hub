import { Link } from "react-router-dom";
import { CiLocationArrow1, CiDollar } from "react-icons/ci";
export const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;


  return (
    <div className="card card-compact border p-5">
       <img src={logo}
          className="w-72"
          alt="google logo"
        />
   
      <div className="card-body">
        <h2 className="card-title font-bold">{job_title}</h2>
        <p>{company_name}</p>
        <div className="space-x-2">
          <button className="btn bg-transparent border border-[#7E90FE] text-[#7E90FE] font-bold">{remote_or_onsite}</button>
          <button className="btn bg-transparent border border-[#7E90FE] text-[#7E90FE] font-bold">{job_type}</button>
        </div>
        <div className="*:flex *:items-center *:gap-4 flex items-center gap-5">
             <div>
             <h4><CiLocationArrow1 /></h4>
             <p>{location}</p>
             </div>
             <div>
             <h4><CiDollar /></h4>
             <p>Salary : {salary}</p>
             </div>
        </div>
        <div className="card-actions ">
          <Link to={`/job/${id}`}>
            <button  
             className="btn flex-grow bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
