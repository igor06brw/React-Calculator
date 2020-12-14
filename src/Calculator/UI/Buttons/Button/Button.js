import React from 'react';
import './Button.css'
const button = (props) => { 
    console.log(props);
    return <div data-target={props.type} className={props.classOfButton}>{props.children}</div> 
}

export default button;
