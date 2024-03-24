import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../Utilies/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiDollar } from "react-icons/ci";
import { LuSubtitles } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";

export const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job, idInt);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("you have applied successfully");
  };

  return (
    <div>
      <h1 className="text-5xl text-center p-10">Job Details</h1>
      <div className="grid grid-cols-4 gap-4 my-10">
        <div className="border md:col-span-3 space-y-4 p-5">
          <p>
            <span className="font-bold">Job Description</span> :{" "}
            {job.job_description}
          </p>
          <p>
            <span className="font-bold">Job Responsibility</span> :{" "}
            {job.job_responsibility}
          </p>
          <p>
            <span className="font-bold">Job Responsibility</span> : <br />{" "}
            {job.educational_requirements}
          </p>
          <p>
            <span className="font-bold">Job Responsibility</span> : <br />{" "}
            {job.experiences}
          </p>
        </div>
        <div className="border p-5 bg-[#7E90FE1A]">
          <h2 className="text-xl pb-5 border-b">Job Details</h2>
          <div className="*:flex *:items-center *:gap-1 space-y-2 pb-2 border-b ">
            <div className="">
              <h4>
                <CiDollar />
              </h4>
              <p>Salary : {job.salary}</p>
            </div>
            <div className="flex ">
              <h4>
              <LuSubtitles />
              </h4>
              <p>Job Title : {job.job_title.slice(0, 18)}</p>
            </div>
            <h1 className="font-bold">Contact Information</h1>
          </div>
          <div className="*:flex *:items-center *:gap-1 space-y-2 pb-2 border-b ">
            <div className="">
              <h4>
              <MdOutlinePhone />
              </h4>
              <p>Phone : {job.contact_information.phone}</p>
            </div>
            <div className="flex ">
              <h4>
              <LuSubtitles />
              </h4>
              <p>Email : {job.contact_information.email}</p>
            </div>
            <div className="flex ">
              <h4>
              <LuSubtitles />
              </h4>
              <p>Address : {job.contact_information.address}</p>
            </div>
          </div>
         
          <button onClick={handleApplyJob} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-full text-white">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
