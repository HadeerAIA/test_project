/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faLinkedin,
    faFacebookF
} from "@fortawesome/free-brands-svg-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import './footer.css';
class Footer extends React.Component {
  render() {
    return(
      <>
<Container fluid className='footer'>
  <Row>
    <Col>
        <div className='left'>
            <h3>Get In Touch</h3>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon className='socialMedia_Github icon header_icon'
                        icon={faGithub}/>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon className='socialMedia_LinkedIn icon header_icon'
                        icon={faTwitter}/>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon
                        className='socialMedia_Twitter icon header_icon'
                        icon={faLinkedin}/>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon
                        className='socialMedia_Facebook icon header_icon'
                        icon={faFacebookF}/>
                    </a>
                </li>
            </div>
    </Col>
    <Col>
    <div className='bt'>
        <Button variant="light" size="lg">Contact Us</Button>
    </div>
    </Col>
    <Col>
    <div className='copyright'>
        <span>Copy Right &copy; 2022 Hadeer Elfiky</span>
    </div>
    </Col>
  </Row>
</Container>
      
     
      </>
    )
  }
}
export default Footer;