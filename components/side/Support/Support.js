
import { Fragment } from 'react';
import { faPatreon, faPaypal, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import classes from './Support.module.css';
import { SOCIAL_LINKS } from '../../../helpers/social-links.js';

const DriveThruRPGButton = "/images/Icon_Drivethru.png";

const Support = (props) => {
    return (
        <Fragment>
            <div className={["item_box_right","item_box_hide_mobile"].join(' ')}>
                <Row>
                    <Col xs={12}>                    
                        <h2 className={"section_title"}>Support Us</h2>                          
                    </Col>
                    <Row className={classes.side_icons}>
                            
                        <Col xs={3}>
                            <a href={SOCIAL_LINKS.patreon} className={classes.SideLink}><span><FontAwesomeIcon icon={faPatreon} aria-hidden="true"/></span></a>
                        </Col>

                        <Col xs={3}>
                            <a href={SOCIAL_LINKS.paypal} className={classes.SideLink}><span><FontAwesomeIcon icon={faPaypal} aria-hidden="true"/></span></a>
                        </Col>

                        <Col xs={3}>
                            <a href={SOCIAL_LINKS.driveThruRPG} className={classes.sideLinkIcon}><img src={DriveThruRPGButton}  alt="Donate with Paypal" aria-hidden="true"/></a>
                        </Col>

                        <Col xs={3}>
                            <a href={SOCIAL_LINKS.itchIo} className={classes.SideLink}><span><FontAwesomeIcon icon={faItchIo} aria-hidden="true"/></span></a>
                        </Col>

                    </Row>               
                </Row> 
            </div>   
        </Fragment>
    )
}

export default Support;