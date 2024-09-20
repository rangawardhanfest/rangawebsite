import React from 'react'
import ReactPlayer from "react-player";
import "./Theme.css";
import yashogatha from "../../img/yashogatha.png"
const Theme = () => {
  return (
    <>
    <h1 className="animate-charcter center" data-aos="fade-right" data-aos-duration="3000">यशोगाथा प्रतिभाशाली महाराष्ट्राची</h1>
    <div className="itheme">
    <div className="i-left">
      <div className="i-left-wrapper">
            <img className='centerimg' src={yashogatha}  data-aos="fade-right" data-aos-duration="2000" alt='' />
        <p className="i-desc" data-aos="fade-right" data-aos-duration="2000" style={{color:"white"}}>
        महाराष्ट्राने या जगाला अनेक अमूल्य रत्ने दिली आहेत. विविध क्षेत्रात त्यांनी केलेल्या कामगिरीची दखल देशानेच नव्हे, तर संपूर्ण जगाने घेतली आहे.त्यांच्या या कार्याची प्रेरणा, समर्पणाची भावना सर्वांनीच आत्मसात करण्यासारखी आहे.

या दिग्गजांनी त्यांच्या क्षेत्रात दिलेले योगदान हे संपूर्ण जगासाठी प्रेरणादायी आहेच, पण त्याचबरोबर त्यांच्या या कार्यातून मराठी भाषेचा आणि महाराष्ट्राचा गौरव सातासमुद्रपार होतोय हे ही कौतुकास्पद आहे.

त्यांच्या कार्याचे स्मरण, त्यांची शिकवण,त्यांचे परिश्रम आणि त्यांचा हा वारसा लक्षात घेऊन रंगवर्धन'२४-२५ घेऊन आले आहे या वर्षाची संकल्पना 

        </p>
        <p className="i-desc" style={{color:"white",textAlign:'center'}}>॥'यशोगाथा प्रतिभाशाली महाराष्ट्राची' !!</p>
      </div>
    </div>
    <div className="i-right">
      <ReactPlayer url="https://youtu.be/8kvMtz47eAQ?si=qKyQA9TSFMR3CUEC" style={{ border: "2px solid rgb(255, 174, 66"}} className="video" controls={true}  data-aos="zoom-in" data-aos-duration="3000" />
    </div>
  </div>
  </>
  )
}

export default Theme
