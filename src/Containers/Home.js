import React, { Component } from 'react';
import { SideNav, Button } from 'carbon-components-react';
import { Link } from 'react-router-dom';
import '../Styles/home.scss'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetSubmitOpportunity } from '../Redux/actions/submitOpportunity';
import { resetMvp } from '../Redux/actions/mvp';
import { resetMvpDetails } from '../Redux/actions/mvpDetails';
import { resetAccountInformationDetails } from '../Redux/actions/accountDetails';

class Home extends Component {

    componentDidMount() {
        this.props.resetSubmitOpportunity();
        this.props.resetMvp();
        this.props.resetMvpDetails();
        this.props.resetAccountInformationDetails();
    };

    render() {
        return (
            <div className="home">
                <SideNav isFixedNav expanded={true} isChildOfHeader={false} aria-label="Side navigation" className="home__sideNav" >
                    <h1>IBM Garage Opportunity Qualification Assessment</h1>
                    <h5>Objective</h5>
                    <p>To identify existing client innovation delivery programs to create a pipeline for IBM garage adaption.</p>
                    <Link to={{
                        pathname: "/forms",
                    }}>
                        <Button className="home__button home__button--start">Lets get started!</Button>
                    </Link>
                    <Link to={{
                        pathname: "/downloadTable",
                    }}>
                        <Button className="home__button home__button--download">View All opportunities</Button>
                    </Link>
                </SideNav>
                <div className="home__content">
                    <div className="home__instructions">
                        <h4 className="home__instructions--header">Instructions</h4>
                        <h5 className="home__instructions--para">Identify projects in your portfolio/account as per the scenarios below and provide information in subsequent sheets</h5>
                    </div>
                    <div className="home__scenario1">
                        <h5 className="home__scenario1--header1">Scenario 1: Shaping MVPs</h5>
                        <h5 className="home__scenario1--para">Client has narrowed down to a business initiative and is working with IBM to build out an MVP or series of MVPs with CIC.</h5>
                        <h4 className="home__scenario1--header2">MUST HAVE PARAMETERS</h4>
                        <ol className="home__scenario1--ordered-list">
                            <li className="home__scenario1--list-item">1. Developing MVPs - along with client teams and IBM team</li>
                            <li className="home__scenario1--list-item">2. Exploring opportunities with emerging technologies (e.g. blockchain, quantum, 5G, AR/VR and emerging AI), business models (e.g. platform businesses or open ecosystems) and data</li>
                            <li className="home__scenario1--list-item">3. Focusing on speed-to-value (often within 8-12 weeks) to  de-risk innovation to the extent possible even within a large transformational/modernization programs.</li>
                            <li className="home__scenario1--list-item">4. Iterative Development with distributed agile and squad-based structure</li>
                        </ol>
                    </div>
                    <div className="home__scenario2">
                        <h5 className="home__scenario2--header1">Scenario 2:  Innovation@Scale</h5>
                        <h5 className="home__scenario2--para">When multiple MVPs are being built at production scale.</h5>
                        <h4 className="home__scenario2--header2">MUST HAVE PARAMETERS</h4>
                        <ol className="home__scenario2--ordered-list">
                            <li className="home__scenario2--list-item">1. MVPs are being scaled/enhanced along with clients focusing on larger portfolio of apps across channels or rollout to multiple markets</li>
                            <li className="home__scenario2--list-item">2. Exploring opportunities with emerging technologies (e.g. blockchain, quantum, 5G, AR/VR and emerging AI), business models (e.g. platform businesses or open ecosystems) and data</li>
                            <li className="home__scenario2--list-item">3. Hardening of architecture, reliability*, and monitoring</li>
                            <li className="home__scenario2--list-item">4. Established dev-ops pipeline from continuous business planning to delivery</li>
                        </ol>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            resetSubmitOpportunity,
            resetMvp,
            resetMvpDetails,
            resetAccountInformationDetails
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);