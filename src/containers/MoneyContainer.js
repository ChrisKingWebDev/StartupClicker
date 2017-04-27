import { connect } from "react-redux";
import { lowerUserPrice, raiseUserPrice, addErrorMessage } from "../actions";
import Money from "../components/Money.react";

const mapStateToProps = (state) => ({
    money: state.money,
    moneyPerUser: state.moneyPerUser,
    launchLevel: state.launchLevel
});

const mapDispatchToProps = (dispatch) => ({
    lowerUserPrice: () => {
        dispatch(lowerUserPrice());
    },
    raiseUserPrice: () => {
        dispatch(raiseUserPrice());
    },
    addErrorMessage: (message) => {
        dispatch(addErrorMessage(message));
    }
});

const MoneyContainer = connect(mapStateToProps, mapDispatchToProps)(Money);


export default MoneyContainer;
