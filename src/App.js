
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseListing from "./components/CourseListing";
import CourseDetails from "./components/CourseDetails";
import StudentDashboard from "./components/StudentDashboard";
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<CourseListing/>} />
        <Route path="/course/:courseId" element={<CourseDetails/>} />
        <Route path="/dashboard" element={<StudentDashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
