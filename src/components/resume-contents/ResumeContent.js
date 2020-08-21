import React from "react";
import Experience from "./parts/Experience";
import "./ResumeContent.css";
import Project from "./parts/Project";
import Education from "./parts/Edcutation";

// React 16.8 React hook
export default function ResumeContent() {
  return (
    <div className="full-size">
      <Experience />
      <Project />
      <Education />
    </div>
  );
}
