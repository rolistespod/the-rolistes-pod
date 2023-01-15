import { faItunesNote, faFacebookF, faInstagram, faSpotify, faTiktok, faTwitter, faYoutube, faMastodon } from '@fortawesome/free-brands-svg-icons';
import { faPodcast, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from '../Footer.module.css';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';


const Follow = (props) => {

    

    return (
        <Aux>   
            <div className={globalClasses.item_box_footer}>                
                <Row>            
                    <Col xs={12}>
                        <h2 className={globalClasses.section_title_footer}>Follow</h2>                     
                    </Col>
                </Row>
                <Row>
                   
                    <Col xs={4}>
                        <a href="https://www.facebook.com/Rolistespod/" className={classes.FooterLink}><span><FontAwesomeIcon icon={faFacebookF} aria-hidden="true"/></span></a>
                    </Col>

                    <Col xs={4}>
                        <a href="https://twitter.com/rolistespod" className={classes.FooterLink}><span><FontAwesomeIcon icon={faTwitter} aria-hidden="true"/></span></a>
                    </Col>  

                    <Col xs={4}>
                        <a href="https://dice.camp/@Rolistespod" className={classes.FooterLink}><span><FontAwesomeIcon icon={faMastodon} aria-hidden="true"/></span></a>
                    </Col> 

                </Row>      
            </div>                    
        </Aux>
    )
}

export default Follow;