// Syllabus.js
import React, { useState } from "react";

const Syllabus = ({ syllabus }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="info">
      <div className="flex ">
        <h2 className="syllabus" onClick={handleToggle}>
          Syllabus
        </h2>
        <span className="dropdown">&#8964;</span>
      </div>
      {isExpanded && (
        <ul>
          {syllabus.map((week) => (
            <li key={week.week}>
              <p className="topic">
                Week {week.week} : {week.topic}{" "}
              </p>
              <p>-{week.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Syllabus;
