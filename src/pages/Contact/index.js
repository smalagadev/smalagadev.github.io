import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from "react-icons";
import { RiMailLine, RiSmartphoneLine, RiGithubLine, RiLinkedinBoxLine, RiFileDownloadLine } from 'react-icons/ri';

function Contact(){
  const subject = "We Want to Meet You!";

  return(
    <Card id="contact">
      <Row>
      <Col lg={4} md={12} sm={12} xs={12}>
        <Card.Img variant="top" src="assets/images/profile.jpg" />
      </Col>
      <Col lg={8} md={12} sm={12} xs={12}>
        <Card.Body>
          <Card.Title>Contact Me</Card.Title>
          <Card.Text>
            <p>
              <RiMailLine/> You can contact my email:
              <a target="_blank" href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=smalagadev@gmail.com&su=${subject}&tf=1`}>
                SMALAGADEV@GMAIL.COM
              </a>
              <br/>
              <RiSmartphoneLine/> You can reach me at: <a href="tel:9543192000">9543192000</a>
              <br/>
              <RiFileDownloadLine/> Download my <a href="assets/Resume_Steffano_Malaga.pdf" download>resumé</a>.
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <p>You can also find me on these platforms:</p>
          <Card.Link target="_blank" href="https://github.com/smalagadev"><RiGithubLine/>GITHUB</Card.Link>
          <Card.Link target="_blank" href="https://linkedin.com/in/smalagadev"><RiLinkedinBoxLine/>LINKEDIN</Card.Link>
        </Card.Body>

      </Col>
      </Row>
    </Card>
  );
}

export default Contact;
