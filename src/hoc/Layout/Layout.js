import React, { Component } from "react";

import Aux from "../Auxiliary/Auxiliary";

class Layout extends Component {
    /*
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };
    */
    render() {
        return (
            <Aux>
                <div>Toolbar, Sidebar, Backdrop</div>
                <main>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
