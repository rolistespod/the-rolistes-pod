import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './RecommendedPosts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const RecommendedPosts = (props) => {
    
    let recommendedPosts = <Spinner/>
    const relatedPosts = props.recommendedPosts;

    recommendedPosts = relatedPosts.map (post => {
        return <Col xs={6} md={6} lg={6} className={classes.cell} key={post["id"]}>
            <Link to={post.url}>
                <div className={globalClasses.img_color_animate}>  
                    <img src={post.cover} alt="Cover Episode"/>
                </div>  
            </Link>
            <Link to={post.url}>
                <h3 className={[globalClasses.section_title, globalClasses.section_title_side, , globalClasses.section_title_Reco].join(' ')}>{post["title"]}</h3>    
            </Link>
        </Col>;   
    });    
    
    return (
        <Aux>
            <div className={globalClasses.item_box_right}>
                <h2 className={globalClasses.section_title}>Recommended Podcasts</h2>
                <Row>
                    {recommendedPosts}
                </Row>         
            </div>
        </Aux>
    )
}

export default RecommendedPosts;