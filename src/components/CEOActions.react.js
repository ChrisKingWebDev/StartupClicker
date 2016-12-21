import React, { Component, PropTypes } from "react";

class CEOActions extends Component {
    clickCeoCode(e) {
        e.preventDefault();
        if (this.props.tech >= this.props.serverSpace) {
            this.props.addMessage("Insufficient Server Space")
        } else {
            this.props.doCeoCode();
        }
    }
    render() {
        return (
            <div className="ceo-actions">
                <h2>CEO Actions</h2>
                <button className={this.props.codeEnabled ? "" : "disabled"} disabled={!this.props.codeEnabled} onClick={this.clickCeoCode.bind(this)}>Code</button>
            </div>
        );
    }
};

CEOActions.propTypes = {
    codeEnabled: PropTypes.bool,
    tech: PropTypes.number,
    serverSpace: PropTypes.number,
    doCeoCode: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired
};

export default CEOActions;
