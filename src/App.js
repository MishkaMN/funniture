import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import FurniturePlacer from "./containers/FurniturePlacer/FurniturePlacer";

class App extends Component {
    render() {
        return (
            <Layout>
                <FurniturePlacer />
            </Layout>
        );
    }
}

export default App;
