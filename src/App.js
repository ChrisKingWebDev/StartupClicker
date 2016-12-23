import React, { Component } from "react";
import "./App.css";
import { primaryGrowth } from "./actions";
import store from "./index.js";

import CEOContainer from "./containers/CEOContainer";
import UsersContainer from "./containers/UsersContainer";
import TechContainer from "./containers/TechContainer";
import DesignContainer from "./containers/DesignContainer";
import OfficeContainer from "./containers/OfficeContainer";
import ServerContainer from "./containers/ServerContainer";
import MessagesContainer from "./containers/MessagesContainer";
import LaunchContainer from "./containers/LaunchContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Startup Clicker</h2>
                </div>
                <div className="container">
                    <div className="container-left">
                        <CEOContainer />
                        <UsersContainer />
                        <div id="resoursePanels">
                            <TechContainer />
                            <DesignContainer />
                        </div>
                        <div id="assetsPanels">
                            <OfficeContainer />
                            <ServerContainer />
                        </div>
                    </div>
                    <div className="container-right">
                        <LaunchContainer />
                        <MessagesContainer />
                    </div>
                </div>


                <div className="container" style={{paddingTop: "50px"}}>
                    Ideas:
                    <ul>
                        <li>Upgrade CEO skills</li>
                        <li>Hire other execs</li>
                        <li>Have messages dismiss</li>
                        <li>Improve coder efficiency (maybe have hackathon or bootcamp)</li>
                        <li>Ability to layoff staff, must be done in groups, maybe 5</li>
                    </ul>
                </div>
            </div>
        );
    }
}

setInterval(() => {
    store.dispatch(primaryGrowth());
}, 1000)

export default App;
