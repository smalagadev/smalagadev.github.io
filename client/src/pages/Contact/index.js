import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Contact(){
  const subject = "We Want to Meet You!";

  return(
    <Card>
      <Card.Img variant="top" src="assets/images/profile.jpg" />
      <Card.Body>
        <Card.Title>Contact Me</Card.Title>
        <Card.Text>
          <p>
            <i className="bi bi-envelope"> </i>YOU CAN CONTACT MY EMAIL:
            <a target="_blank" href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=smalagadev@gmail.com&su=${subject}&tf=1`}>
              SMALAGADEV@GMAIL.COM
            </a>
          </p>

          <p>
            <i className="bi bi-telephone"></i>
            YOU CAN REACH ME AT: <a href="tel:9543192000">9543192000</a>
          </p>
          <p>YOU CAN ALSO FIND ME ON THESE PLATFORMS:</p>
          <ul className="list-inline" id="social-media">
            <li>
              <i className="bi bi-github"></i>
              <a href="https://github.com/smalagadev">GITHUB</a>
            </li>
            <li>
              <i className="bi bi-linkedin"></i>
              <a href="https://linkedin.com/in/smalagadev">LINKEDIN</a>
            </li>
          </ul>
        </Card.Text>
        <Button variant="Make ya move"></Button>
      </Card.Body>
    </Card>
  );
}

export default Contact;
