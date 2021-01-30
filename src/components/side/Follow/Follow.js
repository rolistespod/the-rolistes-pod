import { faItunesNote, faFacebookF, faInstagram, faSpotify, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPodcast, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from './Follow.module.css'
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';


const Follow = (props) => {
    return (
        <Aux>   
            <div className={[globalClasses.item_box_right,globalClasses.item_box_hide_mobile].join(' ')}>                
                <Row>            
                    <Col xs={12}>
                        <h2 className={globalClasses.section_title}>Stay Connected</h2>                     
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h3 className={classes.side_title}>Follow</h3>
                    </Col>
                    <Row className={classes.side_icons}>
                        <Col xs={3}>
                            <a href="https://www.facebook.com/Rolistespod/" className={classes.SideLink}><span><FontAwesomeIcon icon={faFacebookF} aria-hidden="true"/></span></a>
                        </Col>

                        <Col xs={3}>
                            <a href="https://twitter.com/rolistespod" className={classes.SideLink}><span><FontAwesomeIcon icon={faTwitter} aria-hidden="true"/></span></a>
                        </Col>

                        <Col xs={3}>
                            <a href="https://www.instagram.com/rolistespod/?hl=en" className={classes.SideLink}><span><FontAwesomeIcon icon={faInstagram} aria-hidden="true"/></span></a>
                        </Col>

                        <Col xs={3}>
                            <a href="https://www.tiktok.com/@rolistespod?lang=en" className={classes.SideLink}><span><FontAwesomeIcon icon={faTiktok} aria-hidden="true"/></span></a>
                        </Col>
                    </Row>
                    
                </Row>
                <Row>
                    <Col xs={12}>
                        <h3 className={classes.side_title}>Listen</h3>
                    </Col>
                    <Row className={classes.side_icons}>
                        <Col xs={3}>
                            <a href="https://open.spotify.com/show/6WC5wywaLMEhnO7JWIuxom?si=f8oaIyG1QU2cgrBeDlLP5A" className={classes.SideLink}><span><FontAwesomeIcon icon={faSpotify} aria-hidden="true"/></span></a>
                        </Col>

                        <Col xs={3}>
                            <a href="https://podcasts.apple.com/us/podcast/the-rolistes-podcast/id1043891191" className={classes.SideLink}><span><FontAwesomeIcon icon={faItunesNote} aria-hidden="true"/></span></a>
                        </Col>

                        <Col xs={3}>
                            <a href="https://www.youtube.com/channel/UCpguBUBlPRHN4BGTbKPFxrg" className={classes.SideLink}><span><FontAwesomeIcon icon={faYoutube} aria-hidden="true"/></span></a>
                        </Col>

                        <Col xs={3}>
                            <a href="http://www.stitcher.com/podcast/the-rolistes-podcast" className={classes.SideLink}><span><FontAwesomeIcon icon={faPodcast} aria-hidden="true"/></span></a>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h3 className={classes.side_title}>Contact Us</h3>
                    </Col>
                    <Row className={classes.side_icons}>
                        <Col xs={3}>
                            <a href="mailto:rolistespod@gmail.com" className={classes.SideLink}><span><FontAwesomeIcon icon={faEnvelope} aria-hidden="true"/></span></a>
                        </Col>

                        {/* <Col xs={3}>
                            <a href="https://twitter.com/rolistespod" className={classes.SideLink}><span><FontAwesomeIcon icon={faTwitter} aria-hidden="true"/></span></a>
                        </Col>

                        <Col xs={3}>
                            <a href="https://www.facebook.com/Rolistespod/" className={classes.SideLink}><span><FontAwesomeIcon icon={faFacebookF} aria-hidden="true"/></span></a>
                        </Col>      */}
                                   
                    </Row>
                </Row>
            </div>                    
        </Aux>
    )
}

export default Follow;