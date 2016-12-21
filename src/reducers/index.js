//import { combineReducers } from "redux";
import tech from "./tech";
import ceo from "./ceo";
import office from "./office";
import timeouts from "./timeouts";
import messages from "./messages";
import launch from "./launch";

const defaultState = {
    tech:0,
    ceoCodeEnabled: true,
    ceoTechPerCode: 1,
    ceoCodeDelay: 500,

    coders: 0,
    costPerCoder: 50,
    coderEfficency: 1,

    servers: 1,
    techPerServer: 100,
    serverCost: 100,
    serverUpgradeCost: 500,

    design: 0,

    currentOffice: {name: "Living Room", space: 3},
    nextOffice: {name: "Garage", space: 6},

    launchLevel: {status: "Not Launched"},
    nextLaunchLevel: {status: "In Alpha", label: "Launch Alpha", tech: 500, design: 0  },

    messages: []
};

defaultState.serverSpace = function() {
    return this.servers * this.techPerServer;
};
defaultState.currentStaff = function() {
    return this.coders;
};
defaultState.vacantOfficeSpace = function() {
    return this.currentOffice.space - this.currentStaff();
};

defaultState.tech = 48;
defaultState.ceoTechPerCode = 40;

const startUpApp = (state = defaultState, action) => {
    state = ceo(state, action);
    state = tech(state, action);
    state = office(state, action);
    state = launch(state, action);
    state = timeouts(state, action);
    state = messages(state, action);
    return state;
};

export default startUpApp;
