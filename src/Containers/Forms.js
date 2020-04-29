import React, { Component } from 'react';
import HOC from '../Utility/HOC';
import FormHeader from '../Components/Forms/FormHeader';
import AccountInformation from '../Components/Forms/AccountInformation';

class Forms extends Component {

    render() {
        return (
            <HOC>
                <FormHeader />
               <AccountInformation />
            </HOC>
        )
    }

}

export default Forms;