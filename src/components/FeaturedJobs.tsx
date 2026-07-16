import { jobs } from "../data/jobs";
import JobCard from "./JobCard";

function FeaturedJobs() {
  const featuredJobs = jobs.filter(job => job.featured);

  return (
    <div className="container my-5">
      <h2 className="text-center text-warning mb-4">
        ⭐ Featured Jobs
      </h2>

      <div className="row">
        {featuredJobs.map(job => (
          <div className="col-md-4 mb-4" key={job.id}>
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedJobs;