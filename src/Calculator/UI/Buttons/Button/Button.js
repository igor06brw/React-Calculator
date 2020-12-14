import React from 'react';

const button = (props) => { return <div data-target={props.type} className={props.operator}>{props.children}</div> }

export default button;
