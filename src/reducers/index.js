//import { combineReducers } from "redux";
import tech from "./tech";
import design from "./design";
import users from "./users";
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
    ceoDesignEnabled: true,
    ceoDesignPerClick: 1,
    ceoDesignDelay: 500,

    designers: 0,
    costPerDesigner: 50,
    designerEfficency: 2,

    ceoInviteEnabled: true,
    ceoInviteDelay: 5000,
    users: 0,

    currentOffice: {name: "Living Room", space: 3},
    nextOffice: {name: "Garage", space: 6},

    launchLevel: {level: 0, status: "Not Launched"},
    nextLaunchLevel: {level: 1, status: "In Alpha", label: "Launch Alpha", tech: 500, design: 0  },

    messages: []
};

defaultState.serverSpace = function() {
    return this.servers * this.techPerServer;
};
defaultState.maxDesign = function() {
    return this.tech * 2;
};
defaultState.currentStaff = function() {
    return this.coders +  this.designers;
};
defaultState.vacantOfficeSpace = function() {
    return this.currentOffice.space - this.currentStaff();
};

//These are for testing
defaultState.tech = 480;
defaultState.ceoTechPerCode = 40;
defaultState.ceoCodeDelay = 40;
defaultState.servers = 5;
defaultState.ceoDesignPerClick = 40;

const startUpApp = (state = defaultState, action) => {
    state = tech(state, action);
    state = design(state, action);
    state = users(state, action);
    state = office(state, action);
    state = launch(state, action);
    state = timeouts(state, action);
    state = messages(state, action);
    return state;
};

export default startUpApp;
