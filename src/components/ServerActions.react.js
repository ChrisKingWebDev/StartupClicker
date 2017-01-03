import React, { Component, PropTypes } from "react";
import {FormattedNumber} from "react-intl";

class ServerActions extends Component {
    isBuyDisabled() {
        return this.props.tech < this.props.serverCost;
    }
    isUpgradeDisabled() {
        return this.props.tech < this.props.serverUpgradeCost;
    }
    buyServerClick(e) {
        e.preventDefault();
        if (!this.isBuyDisabled()) {
            this.props.buyServer();
        } else {
            this.props.addErrorMessage("Insufficient Tech");
        }
    }
    upgradeServersClick(e) {
        e.preventDefault();
        if (!this.isUpgradeDisabled()) {
            this.props.upgradeServers();
        } else {
            this.props.addErrorMessage("Insufficient Tech");
        }
    }
    render() {
        return (
            <div id="serverPanel" className="assetPanel">
                <h3>Servers: <FormattedNumber value={this.props.servers} /></h3>
                <button className={ this.isBuyDisabled() ? "disabled" : "" } onClick={this.buyServerClick.bind(this)}>Buy Server: <FormattedNumber value={this.props.serverCost} /> Tech</button>
                <h3>Tech Per Server: <FormattedNumber value={this.props.techPerServer} /></h3>
                <button className={ this.isUpgradeDisabled() ? "disabled" : "" } onClick={this.upgradeServersClick.bind(this)}>Upgrade Servers: <FormattedNumber value={this.props.serverUpgradeCost} /> Tech</button>
                <h3>Total Server Space: <FormattedNumber value={this.props.serverSpace()} /></h3>
            </div>
        );
    }
}

ServerActions.propTypes = {
    tech: PropTypes.number,
    serverCost: PropTypes.number,
    servers: PropTypes.number,
    techPerServer: PropTypes.number,
    serverUpgradeCost: PropTypes.number,
    serverSpace: PropTypes.func,
    buyServer: PropTypes.func.isRequired,
    upgradeServers: PropTypes.func.isRequired,
    addErrorMessage: PropTypes.func.isRequired
};

export default ServerActions;
