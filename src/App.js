import React, { Component } from "react";
import "./App.css";
import { primaryGrowth } from "./actions";
import store from "./index.js";

import CEOContainer from "./containers/CEOContainer";
import UsersContainer from "./containers/UsersContainer";
import MoneyContainer from "./containers/MoneyContainer";
import TechContainer from "./containers/TechContainer";
import DesignContainer from "./containers/DesignContainer";
import BuzzContainer from "./containers/BuzzContainer";
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
                        <LaunchContainer />
                        <UsersContainer />
                        <MoneyContainer />
                        <MessagesContainer />
                    </div>
                    <div className="container-right">
                        <CEOContainer />
                        <div id="resoursePanels">
                            <TechContainer />
                            <DesignContainer />
                            <BuzzContainer />
                        </div>
                        <div id="assetsPanels">
                            <OfficeContainer />
                            <ServerContainer />
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>


                <div className="container" style={{paddingTop: "50px"}}>
                    Do List:
                    <ul>
                    </ul>
                    Ideas:
                    <ul>
                        <li>Upgrade CEO skills</li>
                        <li>Hire other execs</li>
                        <li>Have messages dismiss</li>
                        <li>Improve coder efficiency (maybe have hackathon or bootcamp)</li>
                        <li>Ability to fire staff</li>
                        <li>Ability to upgrade maxDesign and maxBuzz</li>
                        <li>Maybe server, etc start to cost money after go live</li>
                        <li>Increase coder efficiency, etc with more money, intern junior senior, etc.</li>
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
