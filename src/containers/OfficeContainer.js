import { connect } from "react-redux";
import { upgradeOffice, addMessage } from "../actions";
import OfficeActions from "../components/OfficeActions.react";

const mapStateToProps = (state) => ({
    currentOffice: state.currentOffice,
    nextOffice: state.nextOffice,
    vacantOfficeSpace: state.vacantOfficeSpace(),
    currentStaff: state.currentStaff()
});

const mapDispatchToProps = (dispatch) => ({
    upgradeOffice: () => {
        dispatch(upgradeOffice());
    },
    addMessage: (message) => {
        dispatch(addMessage(message));
    }
});

const OfficeContainer = connect(mapStateToProps, mapDispatchToProps)(OfficeActions);


export default OfficeContainer;
