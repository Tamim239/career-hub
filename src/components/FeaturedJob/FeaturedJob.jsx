import { useEffect } from "react";
import { useState } from "react"
import { Job } from "../Job/Job";

export const FeaturedJob = () => {
const [jobsDetails, setJobDetails] = useState([]);
const [jobLength, setJobLength] = useState(4);
useEffect(()=>{
  fetch('jobs.json')
  .then(res => res.json())
  .then (data => setJobDetails(data))
},[])

  return (
    <div>
      <h1 className="text-5xl text-center mb-2">Job Details </h1>
      <p className="md:w-1/2 mx-auto text-center mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id vel aliquam error natus explicabo voluptatibus dolorum ea quas recusandae.</p>
      <div className="grid grid-cols-2 gap-6">
        {
          jobsDetails.slice(0,jobLength).map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className={jobLength === jobsDetails.length ? 'hidden' : '' }
      onClick={()=> setJobLength(jobsDetails.length)} 
      >
        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white  ">See More</button>
      </div>
    </div>
  )
}
