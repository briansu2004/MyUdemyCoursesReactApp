// CourseCard.js
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card">
        <img
          src={`/images/${course.logo}`}
          className="card-img-top"
          alt={course.title}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5
            className="card-title text-truncate"
            style={{ maxWidth: '100%', fontSize: '0.9rem' }}
          >
            {course.title}
          </h5>
          <a
            href={course.url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Course
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
