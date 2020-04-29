import React from 'react';

const InputText = props => {
    return (
        <input
            type="text"
            class="inputText"
            value={props.textData}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onTextChange}
            onKeyPress={props.onKeyPress} />
    )
}

export default InputText;