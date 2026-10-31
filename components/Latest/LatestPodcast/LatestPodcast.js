
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


const LatestPodcast = (props) => {

    const podcast = [...props.podcast];

    const podcastMainOutput = 
        <Fragment>
            <Link href={podcast[0].url}>
                <div className="img_scale_animate">                
                    <img src={podcast[0].cover} alt=""/> 
                </div>
            </Link> 
            <div>                                                 
                <div>Latest Release: <span className="date_home"><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {podcast[0].date}</span></div>
                <Link href={podcast[0].url}>
                    <h3 className="title_home_secondary">{podcast[0].title}</h3>
                </Link> 
            </div>        
        </Fragment>;

    podcast.shift();

    const podcastSecondaryOutput = podcast.map(podcast => {
        return <Col xs={12} md={6} key={podcast.id}>
            {/* <Link href={props.location + '/'  + props.postName}> */}
                <Link href={podcast.url}>
                    <div className="img_scale_animate">  
                        <img src={podcast.cover} alt=""/>
                    </div>                                           
                </Link>     
                        {/* <div className={classes.date}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/>{podcast.date}</div> */}
                <Link href={podcast.url}>   
                    <h3 className="title_home_secondary">{podcast.title}</h3>
                    
                </Link>              
            </Col>;
    });

    return (
        <Fragment>
            <div className="item_box">
            <h2 className="section_title">Latest Podcasts</h2>
                <Row>
                    <Col xs={12} lg={6}>
                        {podcastMainOutput}
                    </Col>
                    <Col xs={12} lg={6}>
                        <Row>
                            {podcastSecondaryOutput}
                        </Row>
                    </Col>
                </Row>
            </div>
            
            
        </Fragment>
    )
}

export default LatestPodcast;