import { faItunesNote, faFacebookF, faInstagram, faTwitch, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPodcast, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from '../Footer.module.css';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';


const Watch = (props) => {

    

    return (
        <Aux>   
            <div className={globalClasses.item_box_footer}>                
                <Row>            
                    <Col xs={12}>
                        <h2 className={globalClasses.section_title_footer}>Watch</h2>                     
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <a href="https://www.youtube.com/channel/UCpguBUBlPRHN4BGTbKPFxrg" className={classes.FooterLink}><span><FontAwesomeIcon icon={faYoutube} aria-hidden="true"/></span></a>
                    </Col>

                    <Col xs={4}>
                        <a href="https://www.twitch.tv/rolistespod" className={classes.FooterLink}><span><FontAwesomeIcon icon={faTwitch} aria-hidden="true"/></span></a>
                    </Col>

                    <Col xs={4}>
                        <a href="https://www.tiktok.com/@rolistespod?lang=en" className={classes.FooterLink}><span><FontAwesomeIcon icon={faTiktok} aria-hidden="true"/></span></a>
                    </Col>
                </Row>                  
            </div>                    
        </Aux>
    )
}

export default Watch;