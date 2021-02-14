import { faItunesNote, faFacebookF, faInstagram, faSpotify, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPodcast, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from '../Footer.module.css';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';


const Contact = (props) => {

    

    return (
        <Aux>   
            <div className={globalClasses.item_box_footer}>                
                <Row>            
                    <Col xs={12}>
                        <h2 className={globalClasses.section_title_footer}>Contact Us</h2>                     
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <a href="mailto:rolistespod@gmail.com" className={classes.FooterLink}><span><FontAwesomeIcon icon={faEnvelope} aria-hidden="true"/></span></a>
                    </Col>                          
                </Row>           
            </div>                    
        </Aux>
    )
}

export default Contact;