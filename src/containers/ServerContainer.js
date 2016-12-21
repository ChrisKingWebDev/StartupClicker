import { connect } from "react-redux";
import { buyServer, upgradeServers, addMessage } from "../actions";
import ServerActions from "../components/ServerActions.react";

const mapStateToProps = (state) => ({
    tech: state.tech,
    serverCost: state.serverCost,
    servers: state.servers,
    techPerServer: state.techPerServer,
    serverUpgradeCost: state.serverUpgradeCost,
    serverSpace: state.serverSpace
});

const mapDispatchToProps = (dispatch) => ({
    buyServer: () => {
        dispatch(buyServer());
    },
    upgradeServers: () => {
        dispatch(upgradeServers());
    },
    addMessage: (message) => {
        dispatch(addMessage(message));
    }
});

const ServerContainer = connect(mapStateToProps, mapDispatchToProps)(ServerActions);


export default ServerContainer;
