import React, { Component } from 'react';
import HOC from '../../Utility/HOC';

const FormHeader = props => {
    return (
       <div className="forms__header">
            <h1>Please answer the questions below:</h1>
            <p>All the fields of the form are mandotary</p>
       </div>
    )
}

export default FormHeader;