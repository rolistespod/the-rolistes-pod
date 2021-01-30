import React from 'react'

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Banner.module.css';
import bannerImg from '../../../assets/images/rollinKunzArt/Banner.jpg';

const Banner = (props) => (
    <Aux>

        <img src={bannerImg} alt="banner" className={classes.banner}/>        
                
    </Aux>
)

export default Banner;