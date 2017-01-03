import { connect } from "react-redux";
import { hireCoder, addErrorMessage } from "../actions";
import TechActions from "../components/TechActions.react";

const mapStateToProps = (state) => ({
    tech: state.tech,
    serverSpace: state.serverSpace(),
    costPerCoder: state.costPerCoder,
    coders: state.coders,
    coderEfficency: state.coderEfficency,
    vacantOfficeSpace: state.vacantOfficeSpace()
});

const mapDispatchToProps = (dispatch) => ({
    hireCoder: () => {
        dispatch(hireCoder());
    },
    addErrorMessage: (message) => {
        dispatch(addErrorMessage(message));
    }
});

const TechContainer = connect(mapStateToProps, mapDispatchToProps)(TechActions);


export default TechContainer;
