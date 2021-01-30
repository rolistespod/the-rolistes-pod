import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './LatestNews.module.css';
import globalClasses from '../../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const LatestNews = (props) => {

    const news = [];

    for (let key in props.news){

        const tempDate = new Date(props.news[key]["pubDate"][0]);   

        news.push(
            {
                key: props.news[key].id,
                cover: props.news[key].cover,
                excerpt: props.news[key].excerpt,
                date: props.news[key]["pubDate"][0],
                title: props.news[key]["title"],
                url: props.news[key].url,
                content: props.news[key]["content:encoded"][0],
                postName: props.news[key]["wp:post_name"][0],                
                year:tempDate.getFullYear(),
                month:tempDate.getMonth()+1,
                day:tempDate.getDate()
            }
        );
    }

    const newsMainOutput = <Aux>

                <Link to={news[0].url}>
                    <div className={globalClasses.img_scale_animate}>  
                        <img src={news[0].cover + '?w=2237&h=1173&crop=1'} alt=""/> 
                    </div>
                </Link>
                <div>   
                    <div className={globalClasses.date_home}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {news[0].date}</div>
                    <Link to={news[0].url}>
                        <h3>{news[0].title}</h3>                
                        <p>{news[0].excerpt}... <span className={globalClasses.continue_reading}>Continue reading</span></p>
                    </Link>
                </div>               
            
            </Aux>;


    news.shift();

    const newsSecondaryOutput = news.map(news => {
        return <Col xs={12} md={6} key={news.key}>
                <Link to={news.url}>
                    <div className={globalClasses.img_scale_animate}>  
                        <img src={news.cover + '?w=2237&h=1173&crop=1'} alt=""/>
                    </div>
                </Link>
                <div>                                                 
                    <div className={globalClasses.date_home}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {news.date}</div>
                    <Link to={news.url}>
                        <h3 className={globalClasses.title_home_secondary}>{news.title}</h3>
                    </Link> 
                </div>                                                 
            </Col>;
    });

    return (
        <Aux>
            <div className={globalClasses.item_box}>
                <h2 className={globalClasses.section_title}>Latest News</h2>
                <Row>                    
                    <Col xs={12} lg={5}>
                        {newsMainOutput}
                    </Col>
                    <Col xs={12} lg={7}>
                        <Row>
                            {newsSecondaryOutput}
                        </Row>
                    </Col>
                </Row>
            </div>
        </Aux>
    )
}

export default LatestNews;