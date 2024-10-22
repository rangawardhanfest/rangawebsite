import React from 'react'
import ReactPlayer from "react-player";
import "./Theme.css";

const Theme = () => {
  return (
    <>
    <h1 className="animate-charcter center" data-aos="fade-right" data-aos-duration="3000">रौप्यमहोत्सव समृद्ध महाराष्ट्राच्या गौरवाचा</h1>
    <div className="itheme">
    <div className="i-left">
      <div className="i-left-wrapper">
            <img className='centerimg' src='https://res.cloudinary.com/dcir5216l/image/upload/v1729625742/Theme_logo_24-25-removebg_oxb3lg.png'  data-aos="fade-right" data-aos-duration="2000" alt='' />
        <p className="i-desc" data-aos="fade-right" data-aos-duration="2000" style={{color:"white"}}>
        २४ वर्षांपूर्वी महाराष्ट्राच्या वैभवशाली इतिहासाची गाथा जगभर पोहोचवण्यासाठी रंगवर्धन समितीची स्थापना करण्यात आली होती. महाराष्ट्राच्या महान इतिहासाची प्रेरणा घेऊन, रंगवर्धनने स्वाभिमानाने आणि प्रामाणिकपणे मराठी भाषा आणि मराठी परंपरांचा प्रचार व प्रसार केला आहे.

आज, रंगवर्धन मराठी परंपरांचे उत्साहाने पालन करत आपल्या रौप्यमहोत्सवात पदार्पण करत आहे. संस्कृती, स्वाभिमान आणि पराक्रमाचे प्रतीक असलेल्या आपल्या महाराष्ट्राने नेहमीच भारत देशाचे मार्गदर्शन केले आहे. आता रंगवर्धन एका नवीन संकल्पनेसोबत महाराष्ट्राच्या गौरवशाली इतिहासाचा आणि संस्कृतीचा सन्मान करत साजरा करत आहे,

        </p>
        <p className="i-desc" style={{color:"white",textAlign:'center'}}>॥'रौप्यमहोत्सव समृद्ध महाराष्ट्राच्या गौरवाचा' !!</p>
      </div>
    </div>
    <div className="i-right">
      <ReactPlayer url="https://vimeo.com/1022254875?share=copy#t=0" style={{ border: "2px solid rgb(255, 174, 66"}} className="video" controls={true}  data-aos="zoom-in" data-aos-duration="3000" />
    </div>
  </div>
  </>
  )
}

export default Theme
