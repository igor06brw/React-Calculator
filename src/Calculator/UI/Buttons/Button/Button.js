import React from 'react';
import './Button.css'
const button = (props) => { 
    return <div data-target={props.type} className={props.classOfButton} onClick={() => props.click(props.element)}>{props.children}</div> 
}

export default button;
