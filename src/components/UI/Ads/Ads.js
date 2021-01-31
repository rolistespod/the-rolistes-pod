import React from 'react'
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import adsIMG from '../../../assets/images/Banner_DriveThruRPG_BnW.png';
import classes from './Ads.module.css';
import { Row, Col } from 'react-bootstrap';

const Ads = (props) => (
    <Aux>
        <Row>
            <Col xs={12}>
                <div className={classes.adsContainer}>
                    <a href="https://www.drivethrurpg.com/index.php?affiliate_id=1289000/">            
                        <img src={adsIMG} alt="drivethru RPG ads" className={classes.ads}/>  
                    </a>
                </div>

            </Col>
        </Row>                  
    </Aux>
)

export default Ads;