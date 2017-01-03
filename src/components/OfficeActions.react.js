import React, { Component, PropTypes } from "react";
import {FormattedNumber} from "react-intl";

class OfficeActions extends Component {
    isUpgradeDisabled() {
        return this.props.vacantOfficeSpace > 0 || (this.props.nextOffice.name === "Incubator" && this.props.launchLevel.level < 1) || (this.props.nextOffice.name === "Office" && this.props.launchLevel.level < 2);
    }
    upgradeOfficeClick(e) {
        e.preventDefault();
        if (!this.isUpgradeDisabled()) {
            this.props.upgradeOffice();
        } else if (this.props.vacantOfficeSpace > 0) {
            this.props.addErrorMessage(`${this.props.currentOffice.name} Not Full Yet`);
        } else if (this.props.nextOffice.name === "Incubator") {
            this.props.addErrorMessage("Must Launch Alpha to be in Incubator");
        } else if (this.props.nextOffice.name === "Office") {
            this.props.addErrorMessage("Must Launch Beta to leave Incubator");
        }
    }
    render() {
        return (
            <div id="officePanel" className="assetPanel">
                <h3>Current Office: {this.props.currentOffice.name}{this.props.currentOffice.floor ? " - Floor " + this.props.currentOffice.floor : ""}</h3>
                <h3>Vacant Office Space: <FormattedNumber value={this.props.vacantOfficeSpace} /></h3>
                <button className={ this.isUpgradeDisabled() ? "disabled" : "" } onClick={this.upgradeOfficeClick.bind(this)}>
                    {this.renderButtonText()}
                </button>
            </div>
        );
    }
    renderButtonText() {
        return (
            <span>
                Move Into {this.props.nextOffice.name}{this.props.nextOffice.floor ? " - Floor " + this.props.nextOffice.floor : ""}: {this.renderSpace()}{this.renderCost()}
            </span>
        );
    }
    renderSpace() {
        return (
            <span>
                 +<FormattedNumber value={this.props.nextOffice.space - this.props.currentOffice.space} /> Space
            </span>
        );
    }
    renderCost() {
        if (this.props.nextOffice.cost) {
            return (
                <span>
                    ; $-<FormattedNumber value={this.props.nextOffice.cost} />
                </span>
            );
        }
    }
}

OfficeActions.propTypes = {
    currentOffice: PropTypes.object,
    nextOffice: PropTypes.object,
    currentStaff: PropTypes.number,
    vacantOfficeSpace: PropTypes.number,
    launchLevel: PropTypes.object,
    upgradeOffice: PropTypes.func.isRequired,
    addErrorMessage: PropTypes.func.isRequired
};

export default OfficeActions;
