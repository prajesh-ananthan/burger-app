import React from 'react';

import Auxx from '../../hoc/Auxx'
import classes from './Layout.css'
// import './Layout.css'

const layout = (props) => (

    <Auxx>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes}>
            {props.children}
        </main>
    </Auxx>

);

export default layout;