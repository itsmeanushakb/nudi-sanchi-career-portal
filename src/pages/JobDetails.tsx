import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="container mt-5">
        <h2>Job Not Found</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <Link to="/" className="btn btn-secondary mb-4">
        ← Back
      </Link>

      <div className="card shadow">
        <div className="card-body">

          <h2 className="text-primary">{job.title}</h2>

          <hr />

          <p><strong>Department:</strong> {job.department}</p>

          <p><strong>Category:</strong> {job.category}</p>

          <p><strong>Qualification:</strong> {job.qualification}</p>

          <p><strong>Age:</strong> {job.age}</p>

          <p><strong>Salary:</strong> {job.salary}</p>

          <p><strong>Last Date:</strong> {job.lastDate}</p>

          <p>
            <strong>Description:</strong><br />
            {job.description}
          </p>

          <a
            href={job.notificationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary me-2"
          >
            Official Notification
          </a>

          <a
            href={job.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success me-2"
          >
            Apply Online
          </a>

          <a
            href={job.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-danger"
          >
            YouTube Guide
          </a>

        </div>
      </div>
    </div>
  );
}

export default JobDetails;