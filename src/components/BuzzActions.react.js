import React, { Component, PropTypes } from "react";
import {FormattedNumber} from "react-intl";

class BuzzActions extends Component {
    isDisabled() {
        return this.props.buzz < this.props.costPerMarketer || this.props.vacantOfficeSpace === 0;
    }
    buzzClass() {
        if (this.props.buzz === this.props.maxBuzz) {
            return "at-max";
        }
        if (this.props.buzz >= this.props.maxBuzz) {
            return "over-max";
        }
    }
    clickedHireMarketer(e) {
        e.preventDefault();
        if (!this.isDisabled()) {
            this.props.hireMarketer();
        } else if (this.props.buzz < this.props.costPerMarketer) {
            this.props.addErrorMessage("Insufficient Buzz");
        } else if (this.props.vacantOfficeSpace === 0) {
            this.props.addErrorMessage("Insufficient Office Space");
        }
    }
    render() {
        if (this.props.launchLevel.level > 1) {
            return (
                <div id="buzzPanel" className="resoursePanel">
                    <h3>Buzz: <span className={this.buzzClass()}><FormattedNumber value={this.props.buzz} /></span></h3>
                    <h4>Max Buzz: <FormattedNumber value={this.props.maxBuzz} /></h4>
                    <button className={ this.isDisabled() ? "disabled" : "" }
                        onClick={this.clickedHireMarketer.bind(this)}
                        >Hire Marketer: <FormattedNumber value={this.props.costPerMarketer} /> Buzz</button>
                    <h3>Marketers: <FormattedNumber value={this.props.marketers} /></h3>
                    <p>Marketer Efficiency:<br/><FormattedNumber value={this.props.marketerEfficency} /> buzz per second.</p>
                </div>
            );
        } else {
            return null;
        }
    }
}

BuzzActions.propTypes = {
    buzz: PropTypes.number,
    costPerMarketer: PropTypes.number,
    marketers: PropTypes.number,
    marketerEfficency: PropTypes.number,
    vacantOfficeSpace: PropTypes.number,
    launchLevel: PropTypes.object,
    maxBuzz: PropTypes.number,
    hireMarketer: PropTypes.func.isRequired,
    addErrorMessage: PropTypes.func.isRequired
};

export default BuzzActions;
