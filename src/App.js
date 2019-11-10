import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import FurniturePlacer from "./containers/FurniturePlacer/FurniturePlacer";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <FurniturePlacer />
                </Layout>
            </div>
        );
    }
}

export default App;
