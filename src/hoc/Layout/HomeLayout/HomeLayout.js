import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Footer from '../../../components/Footer/Footer';
import { Container } from 'react-bootstrap';
import Posts from '../../../containers/Posts/Posts';

const HomeLayout = (props) => (
    <Aux>
        <Container>  
            <Posts {...props} type="LATEST" />                
        </Container>        
        <Footer/>        
    </Aux>
)

export default HomeLayout;