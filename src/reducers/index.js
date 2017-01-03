//import { combineReducers } from "redux";
import tech from "./tech";
import design from "./design";
import buzz from "./buzz";
import users from "./users";
import money from "./money";
import office from "./office";
import timeouts from "./timeouts";
import messages from "./messages";
import launch from "./launch";

const defaultState = {
    tech:0,
    ceoCodeEnabled: true,
    ceoTechPerCode: 1,
    ceoCodeDelay: 200,

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
    ceoDesignDelay: 200,

    designers: 0,
    costPerDesigner: 50,
    designerEfficency: 2,

    buzz: 0,
    ceoMarketingEnabled: true,
    ceoBuzzPerClick: 1,
    ceoMarketingDelay: 200,

    marketers: 0,
    costPerMarketer: 50,
    marketerEfficency: 4,

    ceoInviteEnabled: true,
    ceoInviteDelay: 5000,
    users: [],

    allowUserInvites: false,
    userInviteSeconds: 5,
    userPaymentSeconds: 9,

    money: 0,
    moneyPerUser: 0,

    currentOffice: {name: "Living Room", space: 2},
    nextOffice: {name: "Garage", space: 5},

    launchLevel: {level: 0, status: "Not Launched"},
    nextLaunchLevel: {level: 1, status: "In Alpha", label: "Launch Alpha", tech: 500, design: 0, buzz: 0  },

    messages: []
};

defaultState.serverSpace = function() {
    return this.servers * this.techPerServer;
};
defaultState.maxDesign = function() {
    return this.tech * 2;
};
defaultState.maxBuzz = function() {
    return this.design * 2;
};
defaultState.currentStaff = function() {
    return this.coders +  this.designers + this.marketers;
};
defaultState.vacantOfficeSpace = function() {
    return this.currentOffice.space - this.currentStaff();
};

//These are for testing
// defaultState.ceoTechPerCode = 1000;
// defaultState.tech = 2000;
// defaultState.ceoCodeDelay = 40;
// defaultState.ceoDesignDelay = 40;
// defaultState.ceoInviteDelay = 40;
// defaultState.servers = 5;
// defaultState.techPerServer = 10000;
// defaultState.ceoDesignPerClick = 1000;
// defaultState.ceoBuzzPerClick = 1000;
// defaultState.ceoMarketingDelay = 40;
// defaultState.moneyPerUser = 2;

const startUpApp = (state = defaultState, action) => {
    state = tech(state, action);
    state = design(state, action);
    state = buzz(state, action);
    state = users(state, action);
    state = money(state, action);
    state = office(state, action);
    state = launch(state, action);
    state = timeouts(state, action);
    state = messages(state, action);
    return state;
};

export default startUpApp;
