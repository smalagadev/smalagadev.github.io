import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(){
  return(
    <>
      <h1 className="card-title">About Me</h1>
      <Row>
        <Col lg={6} md={12} sm={12} xs={12}>
          <img src="assets/images/profile.jpg" className="card-img" id="profile-image"/>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
        <p className="card-text">
          A South Florida Native currently based in Atlanta, Georgia. I enjoy innovating solutions
          and creating new technology. I enjoy problem solving
          I have  experience with core web technologies with a focus on the MERN (Mongo, Express, React, and Node) stack.
          Download my <a href="assets/Resume_Steffano_Malaga.pdf" download id="resume">resumé</a> to learn more about me.
        </p>
        </Col>
      </Row>
    </>
  );
}

export default About;
