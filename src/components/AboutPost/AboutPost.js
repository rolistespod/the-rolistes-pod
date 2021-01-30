import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './AboutPost.module.css';
import globalClasses from '../../App.module.css';

const AboutPost = (props) => {

    return (
        
        <Aux>
            <div className={globalClasses.item_box_left} >               
                <h1 className={[globalClasses.section_title, globalClasses.section_title_article].join(' ')}>{props.title}</h1>                    
                {/* <p>{props.author}</p> */}
                <div dangerouslySetInnerHTML={{ __html: props.content }} className={classes.aboutPost}/>     
            </div>                                   
        </Aux>
    );
}

export default AboutPost;
