import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Footer from '../../../components/Footer/Footer';
import { Container } from 'react-bootstrap';
import Posts from '../../../containers/Posts/Posts';
import { Helmet } from 'react-helmet';

const HomeLayout = (props) => (
    <Aux>
        <Helmet>
            <title>The Rolistes Podcast - Home</title>
            <meta name="description" content=""/>
        </Helmet>
        <Container>  
            <Posts {...props} type="LATEST" />                
        </Container>        
        <Footer/>        
    </Aux>
)

export default HomeLayout;