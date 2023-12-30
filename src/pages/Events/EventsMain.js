import React from "react";
import "./EventsMain.css";
import VirtualEvents from "../../images/Virtual Events.png";
import AnnualEvents from "../../images/Annual Event.png";
import DecemberToRemember from "../../images/December To Remember - Events - Rangawardhan VJTI.jpg";
import "./event.css";
import rangakatta from "./rangakatta.jpg";
import bhatkanti from "./bhatkanti.jpg";
import shubharambh from "./shubharambh.JPG";
import durgabhet from "./durgabhet.jpg";

const EventsMain = () => {
  return (
    <div className="wholeevent" style={{ color: "black", outline: "none" }}>
      <section className="event1">
        <div className="yearly_events">
        <div className="section-title" data-aos="zoom-in-up"  >
        <h3 className=" past" style={{paddingTop:"2vw"}} >
          Our  Events
        </h3>
      </div>
        </div>
        <section id="all_events">
          <section className="allevents">
            <div className="events">
              <div className="allevent_card">
                <div className="event_info">
                  <div className="event_info_img">
                    <img src={shubharambh} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4 style={{fontFamily:"Gotu"}}>शुभारंभ</h4>
                    <h5  style={{fontFamily:"Gotu"}}>
                    
                    दि. ११ सप्टेंबर २०२३ रोजी आपले लाडके अभिनेते श्री सयाजी शिंदे यांच्या हस्ते रंगवर्धनच्या २४ व्या पर्वाचा शुभारंभ सोहळा पार पडला. कार्यक्रमात त्यांच्याशी गप्पा मारण्याची आणि पर्यावरण व झाडे वाचवण्याच्या 'सह्याद्री वनराई' चळवळीसाठी त्यांनी विद्यार्थ्यांना माहिती दिली.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="allevent_card">
                <div className="event_info">
                  <div className="event_info_img">
                    <img src={rangakatta} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4  style={{fontFamily:"Gotu"}}>रंगा कट्टा</h4>
                    <h5>
                    
VJTI मधल्या मराठी मनाची शान, मराठी संस्कृतीचा अमूल्य वारसा पुढे चालवणारे सर्वांचे आवडते कुटुंब हिच रंगवर्धन ची ओळख आहे. व्हीजेटीआयमध्ये नवीन आलेल्या विद्यार्थ्यांना ह्या कुटुंबाची ओळख व्हावी या उद्देशाने रंगवर्धनने रंगाकट्टा चे आयोजन केले होते
                    </h5>
                  </div>
                </div>
              </div>
              <div className="allevent_card">
                <div className="event_info">
                  <div className="event_info_img">
                    <img src={bhatkanti} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4  style={{fontFamily:"Gotu"}}>भटकंती </h4>
                    <h5>
                    माटुंगा शहरात स्थित असलेले व्हीजेटीआय हे महाविद्यालय सर्वांच्याच ओळखीचे. पण या मोठया शहरात दुसऱ्या शहरातून शिकायला येणाऱ्या विद्यार्थांना हे महाविद्यालय व त्याचा सभोवतालचा परिसर माहित व्हावा ह्या हेतूने व्हीजेटीआय मधील रंगवर्धन समितीने 'भटकंती - a Treasure Hunt' या मजेशीर पण डोक्याला चालना द्यायला लावणारा खेळ आयोजित केला होता.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="allevent_card">
                <div className="event_info">
                  <div className="event_info_img">
                    <img src={durgabhet} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4  style={{fontFamily:"Gotu"}}>दुर्ग भेट </h4>
                    <h5>
                    या वर्षी आपण शिवराज्याभिषेकाचे ३५० वे वर्ष साजरे करत आहोत!
अशा पावन वर्षाचे निमित्त साधून छत्रपती शिवाजी महाराजांनी सुरत येथे लुटलेली लूट ज्या गडावर ठेवली होती, असा 'लोह' ताकदीचा 'लोहगड' या किल्ल्याला २६ नोव्हेंबर रोजी आपण भेट दिली
दुर्गभ्रमण करत असताना आलेला प्रत्येक अनुभव, सभोवताली असलेली हिरवळ हे ह्या दुर्गभेटीचे आकर्षण ठरले.

                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      <div
        className="events_tab"
        style={{ color: "black", backgroundColor: "#000", outline: "none" }}
      ></div>
      <div className="section-title" data-aos="zoom-in-up">
        <h3 className="past" style={{ marginTop: "5%" }}>
          Our Past Events
        </h3>
      </div>
      <div className="events-container">
        <div className="wrapper">
          <div className="card">
            <a href="/decembertoremember">
              <img src={DecemberToRemember} alt="" />
              <div className="info">
                <h1 className="info-t">December to Remember</h1>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="/annualevents">
              <img src={AnnualEvents} alt="" />
              <div className="info">
                <h1 className="info-t">Annual Events</h1>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="/halloffame">
              <img src={VirtualEvents} alt="" />
              <div className="info">
                <h1 className="info-t">Hall of Fame</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsMain;
