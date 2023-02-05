import React from "react";
import akpatri from "./akpatri2.png";
import kawadasa from "./kawadasa11.png";
import path from "./path natya1.png";
import kathalekhan from "./Katha Lekhan.png"
import patralekhan from "./patralekhan.png"
import vyangchitra from "./vyang chitra.png"
import prasang from "./prasang.png"
import kavya from "./Kavya lekhan.png"
import chitrapath from "./Chitrapat.png"
import "./CurrentEvents.css"
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
              <div className="allevent_card style1">
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
              <div className="allevent_card style1">
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
              <div className="allevent_card style1">
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
              <div className="allevent_card style1">
              <a href="https://forms.gle/T5KBSQWZdjXG3h1D6" target="_blank" rel="noreferrer">
                <div className="event_info">
                  <div className="event_info_img1">
                    <img src={kathalekhan} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4 style={{ fontFamily: "Gotu" }}>कथालेखन स्पर्धा</h4>
                  </div>
                </div>
                </a>
              </div>
              <div className="allevent_card style1">
              <a href="https://forms.gle/1ctKyZe2cWCewNhM6" target="_blank" rel="noreferrer">
                <div className="event_info">
                  <div className="event_info_img1">
                    <img src={patralekhan} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4 style={{ fontFamily: "Gotu" }}>पत्रलेखन स्पर्धा </h4>
                  </div>
                </div>
                </a>
              </div>
              <div className="allevent_card style1">
              <a href="https://forms.gle/NN1P6WESATe79LF27" target="_blank" rel="noreferrer">
                <div className="event_info">
                  <div className="event_info_img1">
                    <img src={vyangchitra} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4 style={{ fontFamily: "Gotu" }}>व्यंगचित्र कलाविष्कार </h4>
                  </div>
                </div>
                </a>
              </div>
              <div className="allevent_card style1">
              <a href="https://forms.gle/cG9UB97cxv2kpzg26" target="_blank" rel="noreferrer">
                <div className="event_info">
                  <div className="event_info_img1">
                    <img src={prasang} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4 style={{ fontFamily: "Gotu" }}>प्रसंगवर्णन  </h4>
                  </div>
                </div>
                </a>
              </div>
              <div className="allevent_card style1">
              <a href="https://forms.gle/hZef8ZC1WMpL3T3dA" target="_blank" rel="noreferrer">
                <div className="event_info">
                  <div className="event_info_img1">
                    <img src={kavya} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4 style={{ fontFamily: "Gotu" }}>काव्यलेखन स्पर्धा  </h4>
                  </div>
                </div>
                </a>
              </div>
              <div className="allevent_card style1">
              <a href="https://forms.gle/QJC6Ggwi3h7PdANXA" target="_blank" rel="noreferrer">
                <div className="event_info">
                  <div className="event_info_img1">
                    <img src={chitrapath} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4 style={{ fontFamily: "Gotu" }}>चित्रपट समीक्षण स्पर्धा </h4>
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