import { faItunesNote, faFacebookF, faInstagram, faSpotify, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPodcast, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from '../Footer.module.css';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';


const Subscribe = (props) => {

    

    return (
        <Aux>   
            <div className={globalClasses.item_box_footer}>                
                <Row>            
                    <Col xs={12}>
                        <h2 className={globalClasses.section_title_footer}>Newsletter</h2>                     
                    </Col>
                </Row>
               
                <a href="http://eepurl.com/gJCUVX" className={classes.FooterLinkText}><span>Subscribe</span></a>
                   
            </div>                    
        </Aux>
    )
}

export default Subscribe;