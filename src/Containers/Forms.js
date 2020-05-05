import React, { Component } from 'react';
import { Loading } from 'carbon-components-react';
import FormHeader from '../Components/Forms/FormHeader';
import AccountInformation from '../Components/Forms/AccountInformation';
import AddMVP from '../Components/Forms/AddMVP';
import Footer from '../Components/Forms/Footer';
import '../Styles/form.scss'
import '../Styles/elements.scss'

class Forms extends Component {

    render() {
        return (
            <div className='forms'>
                <Loading small description="Active loading indicator" withOverlay={true} />
                <FormHeader />
               <AccountInformation />
               <AddMVP />
               <Footer />
            </div>
        )
    }

}

export default Forms;