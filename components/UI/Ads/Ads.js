
import { Fragment } from 'react';
import classes from './Ads.module.css';
import { Row, Col } from 'react-bootstrap';
import { SOCIAL_LINKS } from '../../../helpers/social-links.js';

const adsIMG = "/images/Banner_DriveThruRPG_BnW.png";

const Ads = (props) => (
    <Fragment>
        <Row>
            <Col xs={12}>
                <div className={classes.adsContainer}>
                    <a href={SOCIAL_LINKS.driveThruRPG}>            
                        <img src={adsIMG} alt="drivethru RPG ads" className={classes.ads}/>  
                    </a>
                </div>

            </Col>
        </Row>                  
    </Fragment>
)

export default Ads;