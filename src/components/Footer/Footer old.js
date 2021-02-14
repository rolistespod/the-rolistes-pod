import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Footer.module.css';
import Follow from './Follow/Follow';
import Support from './Support/Support';

const Footer = (props) => {

    window.onscroll = function() {toggleFooter(this)};

	const toggleFooter = () => {
        
        const elem = document.getElementById("dynamicFooter") ;

        if(typeof elem !== 'undefined' && elem !== null) {

            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("dynamicFooter").className = classes.navUp;
            } else {
                document.getElementById("dynamicFooter").className = classes.navDown;
            }
        }
    };

    return (
        <Aux>
            <footer>
                <Container className={classes.footer}>
                    <Row>
                        <Col xs={12}>
                            <Follow/>
                        </Col>                             
                        <Col  xs={12}>
                            <Support/>
                        </Col>
                    </Row>                    
                </Container>

                <div id="dynamicFooter">
                    <a href="#top" className={classes.topLink}><FontAwesomeIcon icon={faArrowUp} aria-hidden="true"/></a>
                </div>

            </footer>
            
        </Aux>
    )
}

export default Footer;