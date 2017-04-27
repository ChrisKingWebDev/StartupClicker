import React, { Component, PropTypes } from "react";
import {FormattedNumber} from "react-intl";

class Money extends Component {
    isLowerDisabled() {
        return this.props.moneyPerUser === 0;
    }
    isRaiseDisabled() {
        return this.props.moneyPerUser === 20;
    }
    onLowerClick(e) {
        e.preventDefault();
        if (this.props.launchLevel.level < 4) {
            this.props.addErrorMessage("Must Go Live to Make Money");
        } else if (!this.isLowerDisabled()) {
            this.props.lowerUserPrice();
        }
    }
    onRaiseClick(e) {
        e.preventDefault();
        if (this.props.launchLevel.level < 4) {
            this.props.addErrorMessage("Must Go Live to Make Money");
        } else if (!this.isRaiseDisabled()) {
            this.props.raiseUserPrice();
        }
    }
    render() {
        if (this.props.launchLevel.level > 3 || this.props.money < 0) {
            return (
                <div id="moneyPanel">
                    <h3>Money: $<FormattedNumber value={this.props.money} /></h3>
                    <h3>Money Per User: $<FormattedNumber value={this.props.moneyPerUser} /></h3>
                    <button className={this.isLowerDisabled() ? "disabled" : ""} onClick={this.onLowerClick.bind(this)}>-</button>
                    <button className={this.isRaiseDisabled() ? "disabled" : ""} onClick={this.onRaiseClick.bind(this)}>+</button>
                    <div className="clear"></div>
                </div>
            );
        } else {
            return null;
        }
    }
}

Money.propTypes = {
    money: PropTypes.number,
    moneyPerUser: PropTypes.number,
    launchLevel: PropTypes.object,
    lowerUserPrice: PropTypes.func,
    raiseUserPrice: PropTypes.func,
    addErrorMessage: PropTypes.func
};

export default Money;
