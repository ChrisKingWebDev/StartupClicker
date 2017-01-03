import React, { Component, PropTypes } from "react";

class CEOActions extends Component {
    clickCeoCode(e) {
        e.preventDefault();
        if (this.props.tech >= this.props.serverSpace) {
            this.props.addErrorMessage("Insufficient Server Space");
        } else {
            this.props.ceoCode();
        }
    }
    clickCeoDesign(e) {
        e.preventDefault();
        if (this.props.design >= this.props.maxDesign) {
            this.props.addErrorMessage("Insufficient Tech for Design");
        } else {
            this.props.ceoDesign();
        }
    }
    clickCeoMarketing(e) {
        e.preventDefault();
        if (this.props.buzz >= this.props.maxBuzz) {
            this.props.addErrorMessage("Insufficient Design for Marketing");
        } else {
            this.props.ceoMarketing();
        }
    }
    clickCeoInvite(e) {
        e.preventDefault();
        this.props.ceoInvite();
    }
    render() {
        return (
            <div className="ceo-actions">
                <h2>CEO Actions</h2>
                <button className={this.props.ceoCodeEnabled ? "" : "disabled"} disabled={!this.props.ceoCodeEnabled} onClick={this.clickCeoCode.bind(this)}>Code</button>
                { this.renderDesignButton() }
                { this.renderMarketingButton() }
                { this.renderInviteButton() }
            </div>
        );
    }
    renderDesignButton() {
        if (this.props.launchLevel.level > 0) {
            return (
                <button className={this.props.ceoDesignEnabled ? "" : "disabled"}
                    disabled={!this.props.ceoDesignEnabled}
                    onClick={this.clickCeoDesign.bind(this)}>
                    Design
                </button>
            );
        }
    }
    renderMarketingButton() {
        if (this.props.launchLevel.level > 1) {
            return (
                <button className={this.props.ceoMarketingEnabled ? "" : "disabled"}
                    disabled={!this.props.ceoMarketingEnabled}
                    onClick={this.clickCeoMarketing.bind(this)}>
                    Marketing
                </button>
            );
        }
    }
    renderInviteButton() {
        if (this.props.launchLevel.level > 0) {
            return (
                <button className={this.props.ceoInviteEnabled ? "" : "disabled"} disabled={!this.props.ceoInviteEnabled} onClick={this.clickCeoInvite.bind(this)}>Invite</button>
            );
        }
    }
}

CEOActions.propTypes = {
    ceoCodeEnabled: PropTypes.bool,
    ceoDesignEnabled: PropTypes.bool,
    ceoMarketingEnabled: PropTypes.bool,
    ceoInviteEnabled: PropTypes.bool,
    tech: PropTypes.number,
    serverSpace: PropTypes.number,
    design: PropTypes.number,
    maxDesign: PropTypes.number,
    buzz: PropTypes.number,
    maxBuzz: PropTypes.number,
    launchLevel: PropTypes.object,
    ceoCode: PropTypes.func.isRequired,
    ceoDesign: PropTypes.func.isRequired,
    ceoMarketing: PropTypes.func.isRequired,
    ceoInvite: PropTypes.func.isRequired,
    addErrorMessage: PropTypes.func.isRequired
};

export default CEOActions;
