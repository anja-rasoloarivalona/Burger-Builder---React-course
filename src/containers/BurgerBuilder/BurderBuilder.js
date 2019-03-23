import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
    render() { //the most important one - we always need to render something, makes sense as we manage state, the reason we are using class based components and not functional component or dumb
        return (
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
            
        );
    }
}

export default BurgerBuilder;