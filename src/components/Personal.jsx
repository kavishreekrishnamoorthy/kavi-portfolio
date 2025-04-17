import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImProfile } from "react-icons/im";
import { GrCloudComputer } from "react-icons/gr";
import { PiProjectorScreenChartBold} from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";

const PersonalExperience = () => {
  return (
    <div className="container pt-4" id="Aboutme">
      <h2 className="mb-4 text-center pb-2 fw-bold h1">About Myself..!!</h2>

      <div className="row  gy-4">

     {/* Right Column */}
<div className=" align-items-center  justify-content-center">
  <div className="row row-cols-2 g-2 padding">
    {/* Feature 1 */}
    <div className="col-md-6 d-flex ">
    <div>
        <div className="fw-semibold h3" >
        <div className="feature-icon mb-2"><GrCloudComputer /></div> TECHNICAL SKILLS</div>
        <p className="text-muted">
          <ul><li>C/C++</li>
          <li>Java</li>
          <li>Python</li>
          <li>Javascript</li>
          <li>Front-End (HTML,CSS)</li>
          <li>Framework & Libraies (React,Bootstrap)</li>
          <li>Database (MongoDB)</li></ul> 
        </p>
      </div>
      
    </div>

    {/* Feature 2 */}
    <div className="col-md-6 d-flex">
    <div>
        <div className="fw-semibold h3">  
        <div className="feature-icon mb-2 "><ImProfile />
        </div> EXPERIENCE</div>
        
        <p className="text-muted">
          With hands-on experience in UI/UX design, web development, and app development through  internships
          <ul><li>Empower Guiding Center Pvt Ltd - 06/2023 ~ 07/2023 </li>
          <li>NSIC Ltd - 07/2023 ~ 08/2023</li>
            <li>CodSoft Pvt Ltd - 06/2024 ~ 07/2024 </li>
          <li>Shanthi Info Tech Pvt Ltd -09/2024 ~ 10/2024 </li>
         </ul> 
        </p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="col-md-6 d-flex">
      <div>
        <div className="fw-semibold h3">
        <div className="feature-icon mb-2 " ><PiProjectorScreenChartBold /></div>  PROJECTS</div>
        <p className="text-muted">
          <ul>
            <li>Smart Attendance Register ~Image Processing</li>
            <li>Built a House Rental App ~ MERN Stack</li>
            <li>Designed UI for an E-Commerce App ~ Figma</li>
            <li>Developed a Netflix clone ~ Front End</li>
          </ul>
        </p>
      </div>
    </div>

    {/* Feature 4 */}
    <div className="col-md-6 d-flex">
      <div>
        <div className="fw-semibold h3">
        <div className="feature-icon mb-2"><MdCastForEducation /></div> EDUCATION</div>
        <p className="text-muted">
          <ul>
            <li>Sri Muthukumaran Institute of Technology - 2021 ~ 2025</li>
            <li>Govt.Girl's Hr.Sec.School ~ 2021</li>
            <li>St.Paul's Mat.Hr.Sec.School ~ 2019</li>
          </ul>

         
        </p>
      </div>
    </div>
  </div>
</div>
<hr />

      </div>

      {/* Inline CSS (or move to a CSS file) */}
      <style>{`
        .feature-icon {
          background-color:rgb(0, 0, 0);
          color: white;
          font-size: 20px;
          padding: 12px;
          border-radius: 0.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
        }
      `}</style>
    </div>
  );
};

export default PersonalExperience;
