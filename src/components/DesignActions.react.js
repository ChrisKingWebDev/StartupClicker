import React, { Component, PropTypes } from "react";
import {FormattedNumber} from "react-intl";

class DesignActions extends Component {
    isDisabled() {
        return this.props.design < this.props.costPerDesigner || this.props.vacantOfficeSpace === 0;
    }
    designClass() {
        if (this.props.design === this.props.maxDesign) {
            return "at-max";
        }
        if (this.props.design >= this.props.maxDesign) {
            return "over-max";
        }
    }
    clickedHireDesigner(e) {
        e.preventDefault();
        if (!this.isDisabled()) {
            this.props.hireDesigner();
        } else if (this.props.design < this.props.costPerDesigner) {
            this.props.addErrorMessage("Insufficient Design");
        } else if (this.props.vacantOfficeSpace === 0) {
            this.props.addErrorMessage("Insufficient Office Space");
        }
    }
    render() {
        if (this.props.launchLevel.level > 0) {
            return (
                <div id="designPanel" className="resoursePanel">
                    <h3>Design: <span className={this.designClass()}><FormattedNumber value={this.props.design} /></span></h3>
                    <h4>Max Design: <FormattedNumber value={this.props.maxDesign} /></h4>
                    <button className={ this.isDisabled() ? "disabled" : "" }
                        onClick={this.clickedHireDesigner.bind(this)}
                        >Hire Designer: <FormattedNumber value={this.props.costPerDesigner} /> Design</button>
                    <h3>Designers: <FormattedNumber value={this.props.designers} /></h3>
                    <p>Designer Efficiency:<br/><FormattedNumber value={this.props.designerEfficency} /> design per second.</p>
                </div>
            );
        } else {
            return null;
        }
    }
}

DesignActions.propTypes = {
    design: PropTypes.number,
    costPerDesigner: PropTypes.number,
    designers: PropTypes.number,
    designerEfficency: PropTypes.number,
    vacantOfficeSpace: PropTypes.number,
    launchLevel: PropTypes.object,
    maxDesign: PropTypes.number,
    hireDesigner: PropTypes.func.isRequired,
    addErrorMessage: PropTypes.func.isRequired
};

export default DesignActions;
