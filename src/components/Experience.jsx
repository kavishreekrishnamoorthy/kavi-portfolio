import React from 'react';

const Experience = () => {
  const internships = [
    {
      img: 'imgs/sit certi.jpg',
      alt: 'Shanthi Info Tech Certificate',
      description:
        'Completed a web development internship at Shanthi Info Tech, gaining hands-on experience in front-end while working on real-world projects.',
    },
    {
      img: 'imgs/ECG.jpg',
      alt: 'Empower Guiding Center Certificate',
      description:
        'Completed a front-end development internship at Empower Guiding Center, gaining experience in building responsive and user-friendly web interfaces.',
    },
    {
      img: 'imgs/codsoft uiux.jpg',
      alt: 'CodSoft UI/UX Certificate',
      description:
        'Completed a UI/UX design internship at CodSoft, focusing on creating intuitive and engaging user interfaces for web and mobile applications.',
    },
  ];

  return (
    <>
      {/* Experience Section */}
      <section className="Experience-content" id="Experience">
        <h2 className="text-center mt-3 h1 fw-bold">Experience</h2>
        <p className="text-center mt-3 lead">
          Gained hands-on experience through internships in UI/UX design, web development, and Android application
          development at CodSoft, <br />
          Shanthi Info Tech, NSIC Ltd, and Empower Guiding Center, working on real-world projects like eCommerce platforms
          and a Netflix front-end clone.
        </p>
        <h3 className="Internship-content text-center mt-3" id="Interships">
          Internships
        </h3>

        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              {internships.map((intern, index) => (
                <div className="col" key={index}>
                  <div className="card shadow-lg h-100">
                    <img
                      src={intern.img}
                      className="card-img-top"
                      alt={intern.alt}
                      style={{ height: '225px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div className="card-body d-flex flex-column">
                      <p className="card-text">{intern.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
