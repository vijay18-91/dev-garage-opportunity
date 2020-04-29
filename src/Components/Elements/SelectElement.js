import React from 'react';
import _ from 'lodash';

const SelectElement = props => {
    const options = _.map(props.options, option => {
        return (
            <option value={option.value}>{option.name}</option>
        )
    });

    return (
        <select id="lang" onChange={props.selectChange} value={props.selectValue}>
            <option value="" disabled={props.isDisabled ? true : false}>Choose an option</option>
           {options}
        </select>
    )
}

export default SelectElement;