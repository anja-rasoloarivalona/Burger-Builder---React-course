import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

  /*  constructor(props) {
        constructor(props) {
            super(props);
            this.state = {...}
        } 
    }
    */

    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() { //the most important one - we always need to render something, makes sense as we manage state, the reason we are using class based components and not functional component or dumb
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} /> 
                <BuildControls />
            </Aux>
            
        );
    }
}

export default BurgerBuilder;


//Burger component : I want to return a graphical representation of the burger with all the ingredients