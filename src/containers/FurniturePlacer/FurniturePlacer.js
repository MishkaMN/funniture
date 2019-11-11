import React, { Component } from "react";

import Furnitures from "../../components/Furnitures/Furnitures";

const FURNITURE_PRICES = {
    chair: 0.5,
    ottoman: 0.4,
    table: 1.3,
    couch: 0.7
};
const FURNITURE_MOVING_PRICES = {
    chair: 0.5,
    ottoman: 0.4,
    table: 1.3,
    couch: 0.7
};

class FurniturePlacer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        furnitures: {
            chair: 0,
            ottoman: 0,
            table: 0,
            couch: 0
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false
    };

    render() {
        const disabledInfo = {
            ...this.state.furnitures
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        // {salad: true, meat: false, ...}
        return (
            <div>
                <p>Modal</p>
                <Furnitures furnitures={this.state.furnitures} />
                <p>Build Control</p>
            </div>
        );
    }
}

export default FurniturePlacer;
