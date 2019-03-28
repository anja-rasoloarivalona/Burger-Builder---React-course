import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <button
    className={[classes.Button, classes[props.btnType]].join(' ')}   //when we pass the className, it has to be a string but now it's an array of string though
      onClick={props.clicked}> {props.children}
    </button>
);

export default button;

//With the join(' ') method, we transform the array to a list of strings which is a string