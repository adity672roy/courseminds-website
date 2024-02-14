// CourseDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import coursesData from "../Data";
import Syllabus from "./Syllabus";
import Navbar from "./Navbar";

const CourseDetails = () => {
  const { courseId } = useParams();
  const selectedCourse = coursesData[courseId];

  if (!selectedCourse) {
    return <h1>Course not found</h1>;
  }

  return (
    <div className="section ">
      <Navbar/>
      <div className="grid course-detail">
        <div className="detail-info">
          <h2 className="heading">{selectedCourse.name}</h2>
          <p className="instructor"> {selectedCourse.instructor}</p>

          <p className="schedule">{selectedCourse.schedule}</p>

          <div className="flex detail-side">
            <p className="status">
              <span className="dot"></span>
              {selectedCourse.enrollmentStatus}
            </p>
            <p className="duration">
              <span className="dot"></span>
              {selectedCourse.duration}
            </p>
            <p className="location">
              <span className="dot"></span>
              {selectedCourse.location}
            </p>
          </div>
        </div>
        <div className="detail-img-wrapper">
          <img
            src={selectedCourse.thumbnail}
            alt={selectedCourse.name}
            className="detail-img"
          />
        </div>
      </div>
      <div className="details">
        <div className="info">
          <h2 className="description">Description :</h2>
          <p>- {selectedCourse.description}</p>
        </div>
        <div className="info">
          <h2 className="prerequisites">Prerequisites :</h2>
          {selectedCourse.prerequisites.map((prerequisites, index) => {
            return <p key={index}>- {prerequisites}</p>;
          })}
        </div>
        <Syllabus syllabus={selectedCourse.syllabus} />
      </div>
    </div>
  );
};

export default CourseDetails;
