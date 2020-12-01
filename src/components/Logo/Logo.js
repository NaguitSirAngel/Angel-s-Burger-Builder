import React from 'react';

import burgerLogo from '../../assets/images/logo.jpg';
import classes from './Logo.module.css';
const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Angel's Burger"/>
    </div>
);

export default logo;