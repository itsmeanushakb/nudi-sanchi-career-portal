import { jobs } from "../data/jobs";
import JobCard from "./JobCard";


function LatestJobs() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Latest Jobs</h2>

      <div className="row">
        {jobs.map((job) => (
          <div className="col-md-4 mb-4" key={job.id}>
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;