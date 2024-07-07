import React from "react";
import "./Core.css";
import Card from "../card/Card";

const Core = () => {
  return (
    <div className="core">
      <h1 className="core-title">Core Team</h1>
      <div className="core-container">
        <Card
          name="Core Name"
          position="position"
          img="/assets/core/img-1.jpg"
        />
        <Card
          name="Core Name"
          position="position"
          img="/assets/core/img-1.jpg"
        />
        <Card
          name="Core Name"
          position="position"
          img="/assets/core/img-1.jpg"
        />
        <Card
          name="Core Name"
          position="position"
          img="/assets/core/img-1.jpg"
        />
        <Card
          name="Core Name"
          position="position"
          img="/assets/core/img-1.jpg"
        />
        <Card
          name="Core Name"
          position="position"
          img="/assets/core/img-1.jpg"
        />
      </div>
    </div>
  );
};

export default Core;
