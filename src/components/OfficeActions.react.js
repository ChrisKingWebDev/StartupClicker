import React, { Component, PropTypes } from "react";

class OfficeActions extends Component {
    isUpgradeDisabled() {
        return this.props.vacantOfficeSpace > 0;
    }
    upgradeOfficeClick(e) {
        e.preventDefault();
        if (!this.isUpgradeDisabled()) {
            this.props.upgradeOffice();
        } else {
            this.props.addMessage(`${this.props.nextOffice.name} Not Ready Yet`);
        }
    }
    render() {
        return (
            <div id="officePanel" className="assetPanel">
                <h3>Current Office: {this.props.currentOffice.name}</h3>
                <h3>Vacant Office Space: {this.props.vacantOfficeSpace}</h3>
                <button className={ this.isUpgradeDisabled() ? "disabled" : "" } onClick={this.upgradeOfficeClick.bind(this)}>Move Into {this.props.nextOffice.name}: + {this.props.nextOffice.space - this.props.currentOffice.space} Space</button>
            </div>
        );
    }
}

OfficeActions.propTypes = {
    currentOffice: PropTypes.object,
    nextOffice: PropTypes.object,
    currentStaff: PropTypes.number,
    vacantOfficeSpace: PropTypes.number,
    upgradeOffice: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired
};

export default OfficeActions;
