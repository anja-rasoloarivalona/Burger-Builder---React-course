import React from 'react';

//When you import, the first letter should be a capital one for customed components

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';

const layout = (props) => ( //this is a function 
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;