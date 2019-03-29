import React from 'react';

import burgerLogo from '../../Assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Triano"/>
    </div>
);


export default logo;