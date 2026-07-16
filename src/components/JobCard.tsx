import { Link } from "react-router-dom";
import type { Job } from "../types/Job";

type Props = {
  job: Job;
};

function JobCard({ job }: Props) {
  return (
    <div className="card shadow h-100">
      <div className="card-body">

        <Link
          to={`/jobs/${job.id}`}
          className="text-decoration-none"
        >
          <h4 className="text-primary">{job.title}</h4>
        </Link>

        <p>
          <strong>Department:</strong> {job.department}
        </p>

        <p>
          <strong>Category:</strong> {job.category}
        </p>

        <p>
          <strong>Qualification:</strong> {job.qualification}
        </p>

        <p>
          <strong>Age:</strong> {job.age}
        </p>

        <p>
          <strong>Salary:</strong> {job.salary}
        </p>

        <p>
          <strong>Last Date:</strong> {job.lastDate}
        </p>

        <a
          href={job.notificationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary w-100 mb-2"
        >
          Official Notification
        </a>

        <a
          href={job.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success w-100 mb-2"
        >
          Apply Online
        </a>

        <a
          href={job.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-danger w-100"
        >
          YouTube Guide
        </a>

      </div>
    </div>
  );
}

export default JobCard;