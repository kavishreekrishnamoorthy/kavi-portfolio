import React from "react";
import kavipic from "../assets/kavipic.png";
import { BsPersonLinesFill } from "react-icons/bs";
import Resume from "../assets/kavishreeFrontendDeveloper.pdf";
const HeroBanner = () => {
  return (
    <>
      <div className="container">
        {/* Home Section */}
        <div className="row">
          {/* Home Page */}
          <div
            id="Home"
            className="heroBanner row flex-lg-row-reverse align-items-center g-4"
          >
            <div className="col-10 col-sm-6 col-lg-6">
              <img
                alt="Kavishree"
                src={kavipic}
                className="img-fluid d-flex justify-content-end ms-5 mt-5"
              />
            </div>
            <div className="col-lg-5 m-2">
              <p className="h5">
                Hi, I'm <span className="fw-bold h2">Kavishree</span>
              </p>
              <h5 className="mt-3 lead">
                an interactive{" "}
                <span className="h4 text-dark">
                    <b>Front-End Developer</b>
                </span>
              </h5>
              <p>
                A software developer with six months of experience in web and
                mobile development, front-end development, UI design, and
                cybersecurity. I have worked on real-world projects like
                eCommerce platforms and a Netflix front-end clone. Skilled in
                Node.js and the MERN stack, I excel at building seamless digital
                experiences. Passionate about innovation, I strive to create
                impactful tech solutions.
              </p>

              {/* Button to Open Modal */}
              <a
              role="button"
              download="kavishree_FrontendDeveloper"
              href={Resume}
              target="_blank"
              className="btn btn-dark btn-lg px-4 me-md-2 resume-profile"
            >
              Resume <BsPersonLinesFill />
            </a>
    
            </div>
          </div>
        </div>
        
        <hr />
      </div>
    </>
  );
};

export default HeroBanner;
