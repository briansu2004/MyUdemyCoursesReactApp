import React from 'react';
import CourseCard from './CourseCard';
import coursesData from '../coursesData';

const CourseList = () => {
  return (
    <div className="container">
      <div className="row">
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
