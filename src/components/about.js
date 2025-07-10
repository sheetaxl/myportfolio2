import React from 'react';
import myPhoto from '../assets/sheetal.jpg.png';

const About = () => {
  return (
    <div className="container my-5" id="about">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2>About Me</h2>
          <p>
            I'm Sheetal Sharma, an MCA fresher passionate about frontend and full-stack development.
            I enjoy building beautiful, responsive websites using React, Bootstrap, and modern web technologies.
            I'm currently learning to become a full-stack developer and build real-world projects.
          </p>
        </div>
        <div className="col-md-6 text-center">
          {/* Optional image */}
         <img
  src={myPhoto}
  alt="Sheetal Sharma"
  className="img-fluid rounded-circle shadow"
/>

        </div>
      </div>
    </div>
  );
};

export default About;
