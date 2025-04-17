import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import sitcerti from '../assets/intern/sitcerti.jpg'
import ECG from '../assets/intern/ECG.jpg'
import codsoftuiux from '../assets/intern/codsoftuiux.jpg' 
import NSICandroid from '../assets/intern/NSICandroid.png'
import cc from '../assets/course/cc.jpg'
import java from '../assets/course/java.jpg'
import python from '../assets/course/python.jpg'
import mern from '../assets/course/mern.jpg'
import cloud from '../assets/course/cloud.jpg'
import dataworkshop from '../assets/workshop/dataworkshop.png'
import edureka from '../assets/workshop/edureka.jpg'
import NSICdataworkshop from '../assets/workshop/NSICdataworkshop.jpg'
import productmanagementworkshop from '../assets/workshop/productmanagementworkshop.jpg'

const Certificates = () => {
  return (
    <><div className="container pt-4" id="Badges">
      <h1 className="text-center h1 fw-bold" > Power-Up Badges Earned</h1>
      <p className="mt-4 ">
      I’ve completed multiple internships in Full-Stack Web Development, Android Application Development, and UI/UX Design, where I engineered real-time solutions including dynamic eCommerce platforms, a Netflix front-end replica using React, and a Women’s Safety App powered by the MERN stack (MongoDB, Express.js, React.js, Node.js).I'm proficient in Figma for crafting responsive UI/UX prototypes, high-fidelity wireframes, and interactive design systems. My technical skillset is further backed by certified workshops in full-stack development, frontend frameworks, and design methodologies, enabling me to bridge the gap between intuitive design and scalable development.
      </p>

      {/* ✅ Cards to Trigger Modals */}
      <div className="row p-5 g-4 row-cols-1 row-cols-md-3 g-4">
        {/* card1 */}
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Internship Experience</h5>
              <p className="card-text">Completed diverse internships in Web, Android, and UI/UX design across 4 reputed companies. Built scalable eCommerce platforms, a sleek Netflix-style front-end, and crafted visually compelling, user-centric designs. Proficient in modern tech stacks including React, Java, Bootstrap, and Figma, with a strong focus on real-world usability and seamless UX.</p>
              <button className=" btn btn-dark " data-bs-toggle="modal" data-bs-target="#internship">
              View More..
      </button> 
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="col-sm-4 ">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Course Completions</h5>
              <p className="card-text">Successfully completed certified courses in Web Development, Android App Development, and UI/UX Design, gaining hands-on experience with tools like HTML, CSS, JavaScript, React, Bootstrap, Java, XML, and Figma. Strengthened practical skills through capstone projects, interface design, and mobile app workflows — ready to apply them in real-world environments.</p>
              <button className=" btn btn-dark " data-bs-toggle="modal" data-bs-target="#internship">
              View More..
      </button>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="col-sm-4 ">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Workshop</h5>
              <p className="card-text">Participated in industry focused workshops UI/UX Design,Web Technologies, and Emerging Trends in Tech.Gained valuable insights into usercentered design,responsive layouts,and modern development workflows,both creative thinking practical execution an mobile app workflows ready to apply them in realworld environments.</p>
              <button className=" btn btn-dark " data-bs-toggle="modal" data-bs-target="#internship">
              View More..
      </button>
            </div>
          </div>
        </div>
      </div>

   

    {/* intern modal*/}

    <div className="modal fade" id="internship" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">Internship</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          

        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sitcerti} className="d-block w-100" alt="sitcerti"/>
          </div>
          <div className="carousel-item">
            <img src={ECG} className="d-block w-100" alt="ECG certi"/>
          </div>
          <div className="carousel-item">
            <img src={codsoftuiux} className="d-block w-100" alt="codsoftuiux"/> <p></p>
          </div>
          <div className="carousel-item">
            <img src={NSICandroid} className="d-block w-100" alt="NSICandroid"/> <p></p>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    
      {/* course modal*/}
     
      <div className="modal fade" id="certicourse" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Course</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body">

         <div id="carouselExample2" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={cc} className="d-block w-100" alt="c/c++certi"/>
              </div>
              <div className="carousel-item">
                <img src={java} className="d-block w-100" alt="java certi"/>
              </div>
              <div className="carousel-item">
                <img src={python} className="d-block w-100" alt="python certi"/> <p></p>
              </div>
              <div className="carousel-item">
                <img src={mern} className="d-block w-100" alt="mern stack"/> <p></p>
              </div><div className="carousel-item">
                <img src={cloud} className="d-block w-100" alt="cloud"/> <p></p>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          </div>
          
        </div>
      </div>
    </div> 
    



  {/* workshop */}
  
  <div className="modal fade" id="workshop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">workshop</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          

        <div id="carouselExample3" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={dataworkshop} className="d-block w-100" alt="cccerti"/>
          </div>
          <div className="carousel-item">
            <img src={edureka} className="d-block w-100" alt="javacerti"/>
          </div>
          <div className="carousel-item">
            <img src={NSICdataworkshop} className="d-block w-100" alt="python"/> <p></p>
          </div>
          <div className="carousel-item">
            <img src={productmanagementworkshop} className="d-block w-100" alt="mern"/> <p></p>
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div> 
    </div> 
    </div> 
    <hr />
  </div>
    
    
    
    
    
    
    
    
    
    
    </>   

        );
};

export default Certificates;
