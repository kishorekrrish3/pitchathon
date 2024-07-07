import React from "react";
import "./Faculty.css";
import Card from "../card/Card";

const Faculty = () => {
  return (
    <div className="faculty">
      <h1 className="faculty-title">Faculty Coordinators</h1>
      <div className="faculty-container">
        <Card
          name="Faculty Name"
          position="position"
          img="/assets/faculty/img-1.jpg"
        />
        <Card
          name="Faculty Name"
          position="position"
          img="/assets/faculty/img-1.jpg"
        />
        <Card
          name="Faculty Name"
          position="position"
          img="/assets/faculty/img-1.jpg"
        />
        <Card
          name="Faculty Name"
          position="position"
          img="/assets/faculty/img-1.jpg"
        />
        <Card
          name="Faculty Name"
          position="position"
          img="/assets/faculty/img-1.jpg"
        />
        <Card
          name="Faculty Name"
          position="position"
          img="/assets/faculty/img-1.jpg"
        />
      </div>
    </div>
  );
};

export default Faculty;
