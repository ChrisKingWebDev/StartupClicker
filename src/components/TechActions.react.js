import React, { Component, PropTypes } from "react";

class TechActions extends Component {
    isDisabled() {
        return this.props.tech < this.props.costPerCoder || this.props.vacantOfficeSpace === 0;
    }
    render() {
        return (
            <div id="techPanel" className="resoursePanel">
                <h3>Tech: {this.props.tech}</h3>
                <button className={ this.isDisabled() ? "disabled" : "" }
                    onClick={
                        (e) => {
                            e.preventDefault();
                            if (!this.isDisabled()) {
                                this.props.hireCoder();
                            } else if (this.props.tech < this.props.costPerCoder) {
                                this.props.addMessage("Insufficient Tech");
                            } else if (this.props.vacantOfficeSpace === 0) {
                                this.props.addMessage("Insufficient Office Space");
                            }
                        }
                    }
                    >Hire Coder: {this.props.costPerCoder} Tech</button>
                <h3>Coders: {this.props.coders}</h3>
                <p>Coder Efficiency:<br/>{this.props.coderEfficency} tech per second.</p>
            </div>
        );
    }
}

TechActions.propTypes = {
    tech: PropTypes.number,
    serverSpace: PropTypes.func,
    costPerCoder: PropTypes.number,
    coders: PropTypes.number,
    coderEfficency: PropTypes.number,
    vacantOfficeSpace: PropTypes.number,
    hireCoder: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired
};

export default TechActions;
