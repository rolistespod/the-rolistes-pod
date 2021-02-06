import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Posts from '../../../containers/Posts/Posts';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../../components/Footer/Footer';
import globalClasses from '../../../App.module.css';
import { Helmet } from 'react-helmet';

const AboutUsLayout = (props) => (
    <Aux>
        <Helmet>
            <title>The Rolistes Podcast - About Us</title>
            <meta name="description" content=""/>
        </Helmet>
        <Container>
            <Row>                                           
                <Col xs={12} className={[globalClasses.no_padding_right,globalClasses.no_padding_smallscreen].join(' ')} >                    
                    
                    <Posts 
                        {...props} 
                        type="ABOUT"/>  

                <div className={globalClasses.item_box_left} >               
                    <h1 className={[globalClasses.section_title, globalClasses.section_title_article].join(' ')}>The Team</h1>                 
                    <Posts 
                        {...props} 
                        type="THETEAM"/>  
                </div>
                </Col>
            </Row>
        </Container>
        <Footer/>        
    </Aux>
)

export default AboutUsLayout;