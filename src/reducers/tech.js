import deepFreeze from "deep-freeze";
import expect from "expect";

const tech = (state, action) => {
    let newTech;
    switch (action.type) {
        case "CEO_CODE":
            newTech =  state.tech + state.ceoTechPerCode;
            if (newTech > state.serverSpace()) {
                newTech = state.serverSpace();
            }
            return Object.assign({}, state, {tech: newTech});
        case "HIRE_CODER":
            let newCoders = state.coders + 1;
            let newCostPerCoder = state.costPerCoder + ((Math.floor(newCoders / 5) + 1)  * 5);
            return Object.assign({}, state, {coders: newCoders, tech: state.tech - state.costPerCoder, costPerCoder: newCostPerCoder});
        case "PRIMARY_GROWTH":
            newTech = state.tech;
            if (state.tech < state.serverSpace()) {
                newTech = state.tech + Math.floor(state.coders * state.coderEfficency);
            }
            if (newTech > state.serverSpace()) {
                newTech = state.serverSpace();
            }
            return Object.assign({}, state, {tech: newTech});
        case "BUY_SERVER":
            let newServers = state.servers + 1;
            let newServerCost = state.serverCost + Math.floor((state.serverCost / 4));
            newTech = state.tech - state.serverCost;
            return Object.assign({}, state, {servers: newServers, serverCost: newServerCost, tech: newTech});
        case "UPGRADE_SERVERS":
            let newTechPerServer = state.techPerServer + 100;
            let newServerUpgradeCost = Math.floor(state.serverUpgradeCost  * 1.5);
            newTech = state.tech - state.serverUpgradeCost;
            return Object.assign({}, state, {techPerServer: newTechPerServer, serverUpgradeCost: newServerUpgradeCost, tech: newTech});
        default:
            return state;
    }
};

const testCeoCode = () => {
    const stateBefore = {tech: 0, ceoTechPerCode: 1};
    stateBefore.serverSpace = function() {
        return this.servers * this.techPerServer;
    };
    const action = {
        type: "CEO_CODE"
    };
    const stateAfter = {tech: 1, ceoTechPerCode: 1};
    stateAfter.serverSpace = function() {
        return this.servers * this.techPerServer;
    };

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(tech(stateBefore, action)).toEqual(stateAfter);
};

testCeoCode();
console.log("All tests passed");

export default tech;
