import React from "react";
import akpatri from "./akpatri2.png";
import kawadasa from "./kawadasa11.png";
import path from "./path natya1.png";

const CurrentEvent = () => {
  return (
    <div style={{backgroundColor: 'black !important',overflow:'hidden'}}>
      <section className="event2" style={{backgroundColor: 'black'}}>
        <div className="yearly_events1" style={{backgroundColor: 'black'}}>
          <div className="section-title" data-aos="zoom-in-up" style={{backgroundColor: 'black'}}>
            <h3 className=" past" style={{ paddingTop: "2vw" }}>
              Register for Upcoming Events
            </h3>
          </div>
        </div>
        <section id="all_events1" style={{backgroundColor: 'black'}}>
          <section className="allevents" style={{backgroundColor: 'black'}}>
            <div className="events" style={{backgroundColor: 'black'}}>
              <div className="allevent_card">
                <a href="https://forms.gle/cfvfYs36wf4EnaqGA" target="_blank" rel="noreferrer">
                <div className="event_info">
                  <div className="event_info_img1">
                    <img src={kawadasa} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4 style={{ fontFamily: "Gotu" }}>कवडसा</h4>
                  </div>
                </div>
                </a>
              </div>
              <div className="allevent_card">
              <a href="https://forms.gle/mQENRwaSDACs6gpJ8" target="_blank" rel="noreferrer">
                <div className="event_info">
                  <div className="event_info_img1">
                    <img src={path} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4 style={{ fontFamily: "Gotu" }}>पथनाट्य</h4>
                  </div>
                </div>
                </a>
              </div>
              <div className="allevent_card">
              <a href="https://forms.gle/Fb4huGeFYmQniUMf9" target="_blank" rel="noreferrer">
                <div className="event_info">
                  <div className="event_info_img1">
                    <img src={akpatri} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4 style={{ fontFamily: "Gotu" }}>एकपात्री </h4>
                  </div>
                </div>
                </a>
              </div>
             
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default CurrentEvent;
