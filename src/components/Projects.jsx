import React from "react";
import project1 from "../assets/project/project1.jpg";
import project2 from "../assets/project/project2.jpg";

const Projects = () => {
  return (
    <>
      <div className="container">
        <div className=" py-4  marketing">
          <div id="Projects">
            <h1 className="display-5 fw-bold lh-1 m-3 text-center">Projects</h1>

            {/* Project 1 */}
            <div className="row featurette d-flex justify-content-center align-items-center g-4">
              <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">
                  Smart Attendance System <strong>- using AI</strong>
                </h2>
                <p>
                  An AI-powered smart attendance solution using real-time facial
                  recognition. Ensures high accuracy, eliminates proxy
                  attendance, and saves manual effort in classrooms or corporate
                  setups. Includes live detection, auto logging, and report
                  generation for seamless tracking.
                </p>{" "}
                <button
                  className="btn btn-dark Explore-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#Project1"
                >
                  Explore
                </button>
              </div>
              <div className="col-md-5 d-flex justify-content-center">
                <img
                  src={project1}
                  className="shadow bg-body-tertiary rounded img-fluid"
                  alt="attendence system"
                  width="500"
                />
              </div>
            </div>

            <hr className="featurette-divider" />

            {/* Project 2 */}
            <div className="row featurette d-flex align-items-center g-4">
              <div className="col-md-7 order-md-2 ">
                <h2 className="featurette-heading fw-normal lh-1">
                  Netflix Clone <strong>- Front-End Project</strong>
                </h2>
                <p>
                  A Netflix-inspired UI developed using React JS. Includes
                  category-wise navigation, interactive UI with thumbnails,
                  hover effects, and mock video preview setup.
                </p>
                <button
                  className="btn btn-dark Explore-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#Project2"
                >
                  Explore
                </button>
              </div>
              <div className="col-md-5 order-md-1 d-flex justify-content-center">
                <img
                  src={project2}
                  alt="Netflix Clone"
                  width="500"
                  className="shadow bg-body-tertiary rounded img-fluid"
                />
              </div>
            </div>
            
          </div>
        </div>
        <hr />
      </div>
      {/* modal 1 */}
      <div
        className="modal fade"
        id="Project1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Smart Attendance System using AI
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div id="carouselExample" className="carousel slide">
                <p>
                  {" "}
                  <img className="img-fluid" src={project1} alt="" />
                  Smart Attendance System using AI – Full Description An
                  AI-powered system that automates attendance using real-time
                  facial recognition, enhancing efficiency and eliminating
                  manual errors. Built with a focus on accuracy, speed, and
                  user-friendliness for educational and professional
                  environments. 📸 Features: Real-time face detection and
                  recognition using webcam Machine learning model trained on
                  student image datasets Attendance auto-logged with name, date,
                  and timestamp Excel report generation for admin use
                  User-friendly GUI interface for system control 🖼️ Screenshots:
                  Image 1: Face recognition in action Image 2: Attendance
                  summary Excel sheet Image 3: GUI dashboard interface 🛠️ Tech
                  Stack: <span className="badge bg-primary me-2">
                    Python
                  </span>{" "}
                  <span className="badge bg-success me-2">OpenCV</span>{" "}
                  <span className="badge bg-warning text-dark me-2">
                    Tkinter
                  </span>{" "}
                  <span className="badge bg-info text-dark me-2">
                    Machine Learning
                  </span>{" "}
                  <span className="badge bg-dark me-2">Excel Automation</span>
                </p>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">Understood</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* modal 2 */}
      <div
        className="modal fade"
        id="Project2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Netflix Clone
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div id="carouselExample" className="carousel slide">
                <p>
                  <img className="img-fluid" src={project2} alt="" />A
                  responsive, pixel-perfect front-end clone of Netflix, built
                  using React JS and styled with Bootstrap and custom CSS. The
                  design replicates the original Netflix interface, focusing on
                  layout, interactivity, and user engagement. 📽️ Features:
                  Dynamic UI with sections like Trending, Top Rated, and
                  Originals Hover effects with video thumbnail previews
                  Responsive layout for desktop & mobile Styled using custom
                  components and Bootstrap grid system Scalable design structure
                  for future backend/API integration 🛠️ Tech Stack:{" "}
                  <span className="badge bg-danger me-2">React JS</span>{" "}
                  <span className="badge bg-dark me-2">Bootstrap</span>{" "}
                  <span className="badge bg-secondary me-2">CSS</span>{" "}
                  <span className="badge bg-warning text-dark me-2">JSX</span>
                </p>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">Understood</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
