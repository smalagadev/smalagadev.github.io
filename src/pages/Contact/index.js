import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { IconContext } from "react-icons";
import { RiMailLine, RiSmartphoneLine, RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri';

function Contact(){
  const subject = "We Want to Meet You!";

  return(
    <Card>
      <Row>
      <Col lg={4} md={12} sm={12} xs={12}>
        <Card.Img variant="top" src="assets/images/profile.jpg" />
      </Col>
      <Col lg={8} md={12} sm={12} xs={12}>
        <Card.Body>
          <Card.Title>Contact Me</Card.Title>
          <Card.Text>
            <p>
              YOU CAN CONTACT MY EMAIL <RiMailLine/>:
              <a target="_blank" href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=smalagadev@gmail.com&su=${subject}&tf=1`}>
                SMALAGADEV@GMAIL.COM
              </a>
            </p>
            <p>
              YOU CAN REACH ME AT <RiSmartphoneLine/>: <a href="tel:9543192000">9543192000</a>
            </p>
            <p>YOU CAN ALSO FIND ME ON THESE PLATFORMS:</p>
            <ListGroup horizontal>
              <ListGroup.Item>
                  <a targer="_blank" href="https://github.com/smalagadev"><RiGithubLine/>GITHUB</a>
              </ListGroup.Item>
              <ListGroup.Item>
                  <a targer="_blank" href="https://linkedin.com/in/smalagadev"><RiLinkedinBoxLine/>LINKEDIN</a>
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Col>
      </Row>
    </Card>
  );
}

export default Contact;
