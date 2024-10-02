import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "./TeamSection.css";
import data from "./data.js";

const TeamSection = () => {
  return (
    <div className="team-container">
      {/* Section Titles and Team Members */}
      <h2 className="section-title">Our Team</h2>
      <div className="team-grid">
        {/* Teams Section */}
        {data.teams.map((member) => (
          <div className="team-member" key={member.name}>
            <div className="image-container">
              <img src={member.img} alt={member.name} className="profile-pic" />
              <div className="overlay">
                {member.l && (
                  <a href={member.l} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {member.i && (
                  <a href={member.i} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.Post}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Chief Officers</h2>
      <div className="team-grid">
        {data.sectorHeads.map((member) => (
          <div className="team-member" key={member.name}>
            <div className="image-container">
              <img src={member.img} alt={member.name} className="profile-pic" />
              <div className="overlay">
                {member.l && (
                  <a href={member.l} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {member.i && (
                  <a href={member.i} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.Post}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">WebDev Team</h2>
      <div className="team-grid">
        {data.WebDev.map((member) => (
          <div className="team-member" key={member.name}>
            <div className="image-container">
              <img src={member.img} alt={member.name} className="profile-pic" />
              <div className="overlay">
                {member.l && (
                  <a href={member.l} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {member.i && (
                  <a href={member.i} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.Post}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
