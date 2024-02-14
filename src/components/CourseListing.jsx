// CourseListing.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import coursesData from "../Data";
import Navbar from "./Navbar";

const CourseListing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = Object.values(coursesData).filter((course) => {
    const lowercaseName = course.name ? course.name.toLowerCase() : "";
    const lowercaseInstructor = course.instructor
      ? course.instructor.toLowerCase()
      : "";

    return (
      lowercaseName.includes(searchTerm.toLowerCase()) ||
      lowercaseInstructor.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="section">
      <Navbar />
      <div className="search-input ">
        <input
          type="text"
          placeholder="Search by course or instructor"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
      </div>
      <div className="courses grid">
        {filteredCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <Link to={`/course/${course.id}`}>
              <div className="course-img">
                <img src={course.thumbnail} alt={course.name} className="img" />
              </div>
              <div className="course-info">
                <p className="course-name">{course.name}</p>
                <p className="course-instructor">{course.instructor}</p>
                <p className="course-duration">{course.duration}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
