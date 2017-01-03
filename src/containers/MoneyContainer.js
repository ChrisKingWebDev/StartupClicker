import { connect } from "react-redux";
import { lowerUserPrice, raiseUserPrice } from "../actions";
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
    }
});

const MoneyContainer = connect(mapStateToProps, mapDispatchToProps)(Money);


export default MoneyContainer;
