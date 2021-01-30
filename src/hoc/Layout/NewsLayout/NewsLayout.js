import React, { useEffect } from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Posts from '../../../containers/Posts/Posts';
import classes from './NewsLayout.module.css';
import PaginationList from '../../../components/UI/PaginationList/PaginationList';
import { Col, Container, Row } from 'react-bootstrap';
import Follow from '../../../components/side/Follow/Follow';
import Support from '../../../components/side/Support/Support';
import Footer from '../../../components/Footer/Footer';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import globalClasses from '../../../App.module.css';



const NewsLayout = (props) => 
{    
    useEffect(() => {
        window.scrollTo(0, 0);
      },)

    const postPerPage = 10;
    const indexOfLastPost = props.currentPageNews * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;    

    const paginate = (pageNumber) => props.onSetCurrentPageNews(pageNumber);

    return (
        <Aux>
            <Container>
                <Row>                                           
                    <Col lg={8} xs={12} className={[globalClasses.no_padding_right,globalClasses.no_padding_smallscreen].join(' ')} >                    
                        <div className={globalClasses.item_box_left}>
                            <h1 className={globalClasses.section_title}>News</h1>
                            <Posts 
                                {...props} 
                                type="NEWS"
                                indexOfFirstPost={indexOfFirstPost} 
                                indexOfLastPost={indexOfLastPost}/>
                            <PaginationList 
                                totalRecords={props.news.length} 
                                pageLimit={postPerPage} 
                                clicked={paginate}
                                currentPage={props.currentPageNews}/>

                        </div>  
                    </Col>
                   
                    <Col  lg={4} xs={12}>
                        <Row>  
                            <Col xs={12} className={globalClasses.no_padding_smallscreen}>
                                <Follow /> 
                            </Col>                  
                            <Col xs={12} className={globalClasses.no_padding_smallscreen}>
                                <Support />
                            </Col>                                         
                        </Row>    
                    </Col>
                </Row>
                
            </Container>  
            <Footer/>           
        </Aux>
    )
}

const mapStateToProps = state => {
    return {
        news: state.posts.news,
        gondo: state.posts.gondo,
        currentPageNews: state.posts.currentPageNews
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentPageNews: (pageNumber) => dispatch (actions.setCurrentPageNews(pageNumber))
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(NewsLayout);
