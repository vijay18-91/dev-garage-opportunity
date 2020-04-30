import React, { Component } from 'react';
import HOC from '../Utility/HOC';
import FormHeader from '../Components/Forms/FormHeader';
import AccountInformation from '../Components/Forms/AccountInformation';
import PeopleCultureOrg from '../Components/Forms/PeopleCultureOrg';
import '../Styles/form.scss'
import '../Styles/elements.scss'

class Forms extends Component {

    render() {
        return (
            <div className='forms'>
                <FormHeader />
               <AccountInformation />
               <PeopleCultureOrg />
            </div>
        )
    }

}

export default Forms;