import { connect } from "react-redux";
import { hireMarketer, addErrorMessage } from "../actions";
import BuzzActions from "../components/BuzzActions.react";

const mapStateToProps = (state) => ({
    buzz: state.buzz,
    costPerMarketer: state.costPerMarketer,
    marketers: state.marketers,
    marketerEfficency: state.marketerEfficency,
    maxBuzz: state.maxBuzz(),
    vacantOfficeSpace: state.vacantOfficeSpace(),
    launchLevel: state.launchLevel
});

const mapDispatchToProps = (dispatch) => ({
    hireMarketer: () => {
        dispatch(hireMarketer());
    },
    addErrorMessage: (message) => {
        dispatch(addErrorMessage(message));
    }
});

const BuzzContainer = connect(mapStateToProps, mapDispatchToProps)(BuzzActions);


export default BuzzContainer;
