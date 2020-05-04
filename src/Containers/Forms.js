import React, { Component } from 'react';
import FormHeader from '../Components/Forms/FormHeader';
import AccountInformation from '../Components/Forms/AccountInformation';
import AddMVP from '../Components/Forms/AddMVP';
import '../Styles/form.scss'
import '../Styles/elements.scss'

class Forms extends Component {

    render() {
        return (
            <div className='forms'>
                <FormHeader />
               <AccountInformation />
               <AddMVP />
            </div>
        )
    }

}

export default Forms;