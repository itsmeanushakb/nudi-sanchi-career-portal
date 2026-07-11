import { jobs } from "../data/jobs";
import JobCard from "./JobCard";

type Props = {
  searchTerm: string;
};

function LatestJobs({ searchTerm }: Props) {
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Latest Jobs</h2>

      <div className="row">
        {filteredJobs.map((job) => (
          <div className="col-md-4 mb-4" key={job.id}>
            <JobCard job={job} />
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <h4 className="text-center text-danger">
          No Jobs Found
        </h4>
      )}
    </div>
  );
}

export default LatestJobs;