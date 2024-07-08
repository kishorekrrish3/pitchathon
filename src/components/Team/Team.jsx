import React from "react";
import "./Team.css";
import Card from "../card/Card";

const Team = () => {
  return (
    <div className="team" id="section-team">
      <h1 className="team-title">Team Members</h1>
      <div className="team-container">
        <Card
          name="Team Name"
          position="position"
          img="/assets/team/img-1.jpg"
        />
        <Card
          name="Team Name"
          position="position"
          img="/assets/team/img-1.jpg"
        />
        <Card
          name="Team Name"
          position="position"
          img="/assets/team/img-1.jpg"
        />
        <Card
          name="Team Name"
          position="position"
          img="/assets/team/img-1.jpg"
        />
        <Card
          name="Team Name"
          position="position"
          img="/assets/team/img-1.jpg"
        />
        <Card
          name="Team Name"
          position="position"
          img="/assets/team/img-1.jpg"
        />
      </div>
    </div>
  );
};

export default Team;
