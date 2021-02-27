import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import paypalButton from '../../../assets/images/Buttons_PayPal_BnW.png';
import patreonButton from '../../../assets/images/Buttons_Patreon_BnW.png';
import DriveThruRPGButton from '../../../assets/images/Buttons_DriveThruRPG_BnW.png';
import itchIOButton from '../../../assets/images/Buttons_Itch.io_BnW.png';
import classes from '../Footer.module.css';
import globalClasses from '../../../App.module.css';

const Support = (props) => {
    return (
        <Aux>
            <Row>
                <Col xs={12}>
                    <div className={globalClasses.item_box_footer}>
                        <h2 className={globalClasses.section_title_footer}>Support Us</h2>
                        <Row>                        

                            <Col xs={6} md={3} lg={3}>
                                <a href="https://www.drivethrurpg.com/index.php?affiliate_id=1289000/" className={classes.supportLink}><img src={DriveThruRPGButton}  alt="Donate with Paypal" aria-hidden="true"/></a>
                            </Col>

                            <Col xs={6} md={3} lg={3}>
                                <a href="https://itch.io/?ac=6hKcoR9Jch" className={classes.supportLink}><img src={itchIOButton}  alt="Support on ItchIo" aria-hidden="true"/></a>
                            </Col>

                            <Col xs={6} md={3} lg={3}>
                                <a href="https://www.paypal.com/paypalme/rolistespod/" className={classes.supportLink}><img src={paypalButton}  alt="Donate with Paypal" aria-hidden="true"/></a>
                            </Col>

                            <Col xs={6} md={3} lg={3}>
                                <a href="https://www.patreon.com/RolistesPod" className={classes.supportLink}><img src={patreonButton} alt="Support me on Patreon" aria-hidden="true"/></a>
                            </Col>
                        </Row>                   
                    </div>
                </Col>               
            </Row>    
        </Aux>
    )
}

export default Support;