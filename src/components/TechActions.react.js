import React, { Component, PropTypes } from "react";
import {FormattedNumber} from "react-intl";

class TechActions extends Component {
    isDisabled() {
        return this.props.tech < this.props.costPerCoder || this.props.vacantOfficeSpace === 0;
    }
    techClass() {
        if (this.props.tech === this.props.serverSpace) {
            return "at-max";
        }
        if (this.props.tech >= this.props.serverSpace) {
            return "over-max";
        }
    }
    render() {
        return (
            <div id="techPanel" className="resoursePanel">
                <h3>Tech: <span className={this.techClass()}>
                    <FormattedNumber value={this.props.tech} />
                </span></h3>
                <h4>Max Server Space: <FormattedNumber value={this.props.serverSpace} /></h4>
                <button className={ this.isDisabled() ? "disabled" : "" }
                    onClick={
                        (e) => {
                            e.preventDefault();
                            if (!this.isDisabled()) {
                                this.props.hireCoder();
                            } else if (this.props.tech < this.props.costPerCoder) {
                                this.props.addErrorMessage("Insufficient Tech");
                            } else if (this.props.vacantOfficeSpace === 0) {
                                this.props.addErrorMessage("Insufficient Office Space");
                            }
                        }
                    }
                    >Hire Coder: <FormattedNumber value={this.props.costPerCoder} /> Tech</button>
                <h3>Coders: <FormattedNumber value={this.props.coders} /></h3>
                <p>Coder Efficiency:<br/><FormattedNumber value={this.props.coderEfficency} /> tech per second.</p>
            </div>
        );
    }
}

TechActions.propTypes = {
    tech: PropTypes.number,
    serverSpace: PropTypes.number,
    costPerCoder: PropTypes.number,
    coders: PropTypes.number,
    coderEfficency: PropTypes.number,
    vacantOfficeSpace: PropTypes.number,
    hireCoder: PropTypes.func.isRequired,
    addErrorMessage: PropTypes.func.isRequired
};

export default TechActions;
