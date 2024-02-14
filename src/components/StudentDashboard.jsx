// StudentDashboard.js
import React, { useState } from "react";
import coursesData from "../Data";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const [completedCourses, setCompletedCourses] = useState([]);

  const markAsCompleted = (courseId) => {
    setCompletedCourses((prevCompletedCourses) => [
      ...prevCompletedCourses,
      courseId,
    ]);
  };

  const isCourseCompleted = (courseId) => completedCourses.includes(courseId);

  return (
    <div className="section">
      <Navbar />
      <h2 className="dashboard-heading">Student Dashboard</h2>
      <ul className="courses grid">
        {Object.values(coursesData).map((course) => (
          <li key={course.id} className="course-card">
            <Link to={`/course/${course.id}`}>
              <div>
                <div className="course-img">
                  <img
                    src={course.thumbnail}
                    alt={course.name}
                    className="img"
                  />
                </div>

                <div className="course-info">
                  <p className="course-name">{course.name}</p>
                  <p className="course-instructor">{course.instructor}</p>

                  <h3 className="course-name">Enrolled Students:</h3>
                  {course.students.map((student) => {
                    return (
                      <div key={student.id}>
                        <p className="enrolled-student">
                          {student.name} - {student.email}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Link>
            {isCourseCompleted(course.id) ? (
              <button className="btn btn-complete">Completed</button>
            ) : (
              <button
                onClick={() => markAsCompleted(course.id)}
                className="btn"
              >
                Mark as Completed
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
