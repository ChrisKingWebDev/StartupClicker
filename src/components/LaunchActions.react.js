import React, { Component, PropTypes } from "react";

class LaunchActions extends Component {
    isLaunchEnabled() {
        return this.props.tech >= this.props.nextLaunchLevel.tech && this.props.design >= this.props.nextLaunchLevel.design;
    }
    launchLabel() {
        let label = <span>{this.props.nextLaunchLevel.label}<br/>{this.props.nextLaunchLevel.tech + " Tech"}
            {(this.props.nextLaunchLevel.design) ? <span><br/> {this.props.nextLaunchLevel.design + " Design"}</span> : ""}
        </span>;
        return label;
    }
    clickLaunchLevel(e) {
        e.preventDefault();
        if (this.props.tech < this.props.nextLaunchLevel.tech) {
            this.props.addMessage("Insufficient Tech");
        } else if (this.props.design < this.props.nextLaunchLevel.design) {
            this.props.addMessage("Insufficient Design");
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
    doLaunchLevel: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired
};

export default LaunchActions;
