import React from 'react';
import { faPatreon, faPaypal, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import driveThruRPGButton from '../../../assets/images/Icon_Drivethru.png';
import kofiButton from '../../../assets/images/Icon_Kofi.png';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Subscribe.module.css';
import globalClasses from '../../../App.module.css';

const Subscribe = (props) => {
    return (
        <Aux>
            <div className={[globalClasses.item_box_right,globalClasses.item_box_hide_mobile].join(' ')}>
                <Row>            
                    <Col xs={12}>
                        <h2 className={globalClasses.section_title}>Newsletter</h2>                     
                    </Col>
                </Row>
               
                <a href="mailto:rolistespod@gmail.com" className={classes.SideLinkText}><span>Subscribe</span></a>
                   
            </div>   
        </Aux>
    )
}

export default Subscribe;