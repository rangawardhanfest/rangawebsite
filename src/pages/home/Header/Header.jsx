import { React } from "react";
import "./Header.css";


const Header = () => {
  return (
    <>
       <section className="animationforheader">
       <video className="videoheader" autoPlay muted >
 <source src="https://res.cloudinary.com/dcir5216l/video/upload/v1726869991/smoke_hiuxgr.mp4" type="video/mp4" />
</video>
       <h1 className="parts">
           <span className="past">रं</span>
            <span className="past">ग</span>
            <span className="past">व</span>
            <span className="past">र्ध</span>
            <span className="past">न</span>
            <span className="past">'</span>
            <span className="past"> </span>
            <span className="past">२</span>
            <span className="past">४</span>
            <span className="past">-</span>
            <span className="past">२</span>
            <span className="past">५</span>
           
            <div className="animate-charcter" style = {{marginTop: "2%"}}>रौप्यमहोत्सव समृद्ध महाराष्ट्राच्या गौरवाचा!</div>
            {/* <div className="animate-charcter">११ सप्टेंबर</div> */}
        </h1> 
    </section>
    </>
  )
}

export default Header
