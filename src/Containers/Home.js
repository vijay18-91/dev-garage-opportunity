import React, { Component } from 'react';
import { SideNav, Button } from 'carbon-components-react';
import { Link } from 'react-router-dom';
import '../Styles/home.scss'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <SideNav isFixedNav expanded={true} isChildOfHeader={false} aria-label="Side navigation" className="home__sideNav" >
                    <h1>IBM Garage Opportunity Qualification Assessment</h1>
                    <h3>Objective</h3>
                    <p>To identify existing client innovation delivery programs to create a pipeline for IBM garage adaption.</p>
                    <Link to={{
                        pathname: "/forms",
                    }}>
                        <Button className="home__button">Lets get started!</Button>
                    </Link>
                </SideNav>
            </div >
        )
    }
}

export default Home;