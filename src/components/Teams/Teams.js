import React from "react";
import "./Teams.css";
import Title from "../Title/Title";
import { teamData } from "../../assets/assets";

const Teams = () => {
  return (
    <section id="teams" className="teams">

      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brand's success."
      />

      <div className="team-grid">
        {teamData.map((team, index) => (
          <div className="team-card" key={index}>

            <img
              src={team.image}
              alt={team.name}
              className="team-image"
            />

            <div className="team-content">
              <h3>{team.name}</h3>
              <p>{team.title}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Teams;