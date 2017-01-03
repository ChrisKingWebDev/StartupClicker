import React, { Component, PropTypes } from "react";
import {FormattedNumber} from "react-intl";

class LaunchActions extends Component {
    isLaunchEnabled() {
        return this.props.tech >= this.props.nextLaunchLevel.tech && this.props.design >= this.props.nextLaunchLevel.design && this.props.buzz >= this.props.nextLaunchLevel.buzz;
    }
    launchLabel() {
        let label = <span>
            {this.props.nextLaunchLevel.label}<br/><FormattedNumber value={this.props.nextLaunchLevel.tech} />{" Tech"}
            {(this.props.nextLaunchLevel.design) ? <span><br/><FormattedNumber value={this.props.nextLaunchLevel.design} />{" Design"}</span> : "" }
            {(this.props.nextLaunchLevel.buzz) ? <span><br/><FormattedNumber value={this.props.nextLaunchLevel.buzz} />{" Buzz"}</span> : ""}
        </span>;
        return label;
    }
    clickLaunchLevel(e) {
        e.preventDefault();
        if (this.props.tech < this.props.nextLaunchLevel.tech) {
            this.props.addErrorMessage("Insufficient Tech");
        } else if (this.props.design < this.props.nextLaunchLevel.design) {
            this.props.addErrorMessage("Insufficient Design");
        } else if (this.props.buzz < this.props.nextLaunchLevel.buzz) {
            this.props.addErrorMessage("Insufficient Buzz");
        } else {
            this.props.doLaunchLevel();
        }
    }
    render() {
        return (
            <div className="launch-actions">
                <h2>Company Status</h2>
                <h3>{this.props.launchLevel.status}</h3>
                <button className={this.isLaunchEnabled() ? "" : "disabled"} onClick={this.clickLaunchLevel.bind(this)}>{this.launchLabel()}</button>
            </div>
        );
    }
}

LaunchActions.propTypes = {
    launchLevel: PropTypes.object,
    nextLaunchLevel: PropTypes.object,
    tech: PropTypes.number,
    design: PropTypes.number,
    buzz: PropTypes.number,
    doLaunchLevel: PropTypes.func.isRequired,
    addErrorMessage: PropTypes.func.isRequired
};

export default LaunchActions;
