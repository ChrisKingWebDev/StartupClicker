import React, { Component, PropTypes } from "react";

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
            this.props.addMessage("Insufficient Design");
        } else if (this.props.vacantOfficeSpace === 0) {
            this.props.addMessage("Insufficient Office Space");
        }
    }
    render() {
        if (this.props.launchLevel.level > 0) {
            return (
                <div id="designPanel" className="resoursePanel">
                    <h3>Design: <span className={this.designClass()}>{this.props.design}</span></h3>
                    <button className={ this.isDisabled() ? "disabled" : "" }
                        onClick={this.clickedHireDesigner.bind(this)}
                        >Hire Designer: {this.props.costPerDesigner} Design</button>
                    <h3>Designers: {this.props.designers}</h3>
                    <p>Designer Efficiency:<br/>{this.props.designerEfficency} design per second.</p>
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
    addMessage: PropTypes.func.isRequired
};

export default DesignActions;
