import React from "react";
import "./EventsMain.css";
import VirtualEvents from "../../images/Virtual Events.png";
import AnnualEvents from "../../images/Annual Event.png";
import DecemberToRemember from "../../images/December To Remember - Events - Rangawardhan VJTI.jpg";
import "./event.css";

import bhatkanti from "./bhatkanti.jpg";


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
                    <img src="https://res.cloudinary.com/dcir5216l/image/upload/v1730129855/IMG-20241024-WA0008_qf03kf.jpg" alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4 style={{fontFamily:"Gotu"}}>शुभारंभ</h4>
                    <h5  style={{fontFamily:"Gotu"}}>
                    
                    दि. ११ ऑक्टोबर २०२४ रोजी रंगवर्धनच्या २५ व्या पर्वाचा शुभारंभ लाडके अभिनेते श्री. संजय मोने यांच्या हस्ते संपन्न झाला. या सोहळ्यात श्री. मोने सरांनी त्यांच्या प्रवासाबद्दल संवाद साधला, तर महाराष्ट्राचे शालेय शिक्षण मंत्री, मराठी भाषा मंत्री आणि मुंबईचे पालकमंत्री नामदार श्री. दीपक केसरकर यांनी देखील उपस्थिती लावली. DJ Kratex च्या शानदार संगीताने कार्यक्रमात उत्साह निर्माण केला, आणि सर्वांनी आनंदाने हा क्षण साजरा केला.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="allevent_card">
                <div className="event_info">
                  <div className="event_info_img">
                    <img src="https://res.cloudinary.com/dcir5216l/image/upload/v1730129884/20241003_200234_zjkshz.jpg" alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4  style={{fontFamily:"Gotu"}}>रंगा कट्टा</h4>
                    <h5>
                    
                    VJTI मधील मराठी मनाची शान आणि संस्कृतीचा अमूल्य वारसा पुढे चालवणारे सर्वांचे आवडते कुटुंब म्हणजेच रंगवर्धन. नवीन विद्यार्थ्यांना या कुटुंबाची ओळख व्हावी ह्या उद्देशाने रंगवर्धनने रंगाकट्टा आयोजित केला.

या कार्यक्रमात विद्यार्थ्यांना रंगवर्धनच्या विविध विभागांबद्दल माहिती मिळाली, आणि त्यांना स्वतःची ओळख दाखविण्याची संधी मिळवली. हा रंगाकट्टा संवाद साधण्याचा आणि एकत्रितपणाची भावना निर्माण करण्याचा एक खास अनुभव ठरला.
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
                    माटुंगा शहरात स्थित असलेले व्हीजेटीआय हे महाविद्यालय सर्वांच्याच ओळखीचे. पण या मोठ्या शहरात दुसऱ्या शहरातून शिकायला येणाऱ्या विद्यार्थांना हे महाविद्यालय व त्याचा सभोवतालचा परिसर माहित व्हावा ह्या हेतूने व्हीजेटीआय मधील रंगवर्धन समितीने 'भटकंती - a Treasure Hunt' या मजेशीर पण डोक्याला चालना द्यायला लावणारा खेळ आयोजित केला होता, ज्यामध्ये विद्यार्थ्यांना विविध गोष्टी शोधण्यात आणि त्यांचा अनुभव सामायिक करण्यात आनंद मिळाला.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="allevent_card">
                <div className="event_info">
                  <div className="event_info_img">
                    <img src="https://res.cloudinary.com/dcir5216l/image/upload/v1730129880/IMG-20241023-WA0009_jwfzeo.jpg" alt="durg  bhet" />
                  </div>
                  <div className="event_info_name">
                    <h4  style={{fontFamily:"Gotu"}}>दुर्ग भेट </h4>
                    <h5>
                    या वर्षी आपण रंगवर्धनचे रौप्यमहोत्सवी वर्ष साजरे करत आहोत! अशा पावन वर्षाचे निमित्त साधून, छत्रपती शिवाजी महाराजांनी स्वराज्याची राजधानी म्हणून स्थापन केलेल्या 'दुर्गदुर्गेश्वर रायगड' किल्ल्याला आपण भेट दिली.

रायगडाच्या भव्यतेत इतिहास जिवंत होतो. दुर्गभ्रमण करत असताना आलेला प्रत्येक अनुभव, गडाच्या तटावरून दिसणारे निसर्गरम्य दृश्य आणि पायथ्याशी पसरलेली हिरवळ, हे ह्या दुर्गभेटीचे मुख्य आकर्षण ठरले. या दुर्गभेटीदरम्यान, आम्ही पाचाड गावातील राजमाता जिजाऊंच्या समाधीस्थळालाही भेट दिली, ज्यामुळे त्यांच्या महानतेची आणि त्यागाची अनुभूती घेता आली.

या ऐतिहासिक किल्ल्याच्या भेटीत शिवकालीन वारसा आणि निसर्गाची अपूर्व समृद्धता अनुभवण्याचा आनंद अविस्मरणीय ठरला.

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
