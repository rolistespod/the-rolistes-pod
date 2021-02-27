import React, { useEffect } from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Posts from '../../../containers/Posts/Posts';
import classes from './PostLayout.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Ads from '../../../components/UI/Ads/Ads';
import Follow from '../../../components/side/Follow/Follow';
import Support from '../../../components/side/Support/Support';
import PaginationList from '../../../components/UI/PaginationList/PaginationList';
import Footer from '../../../components/Footer/Footer';
import globalClasses from '../../../App.module.css';
import { useParams } from 'react-router-dom';
import Subscribe from '../../../components/side/Subscribe/Subscribe';

const PostLayout = (props) => {

    let {pageId} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
      },)

    return(
        <Aux>
            
            <Container>
                <Ads/>
                <Row>
                    <Col lg={8} xs={12} className={[globalClasses.no_padding_right,globalClasses.no_padding_smallscreen].join(' ')}>
                        <Posts type={props.type} pageTitle={pageId}/>                    
                        <PaginationList/>
                    </Col>
                    <Col  lg={4} xs={12}>
                        <Row>  
                            <Col xs={12} className={globalClasses.no_padding_smallscreen}>
                                <Follow /> 
                            </Col>                  
                            <Col xs={12} className={globalClasses.no_padding_smallscreen}>
                                <Support />
                            </Col>  
                            {/* <Col xs={12} className={globalClasses.no_padding_smallscreen}>
                                <Subscribe />
                            </Col>    */}
                            <Col xs={12} className={globalClasses.no_padding_smallscreen}>
                                <Posts type="RECOMMENDED" postType={props.type} pageTitle={pageId}/>
                            </Col>  
                            <Col xs={12} className={globalClasses.no_padding_smallscreen}>
                                <Posts type="RECENT" postType={props.type}/>
                            </Col>                  
                        </Row>                    
                    </Col>
                </Row>
            </Container>    
            
            <Footer/>  
            
        </Aux>
    )

}
    
export default PostLayout;