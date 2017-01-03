import { connect } from "react-redux";
import { upgradeOffice, addErrorMessage } from "../actions";
import OfficeActions from "../components/OfficeActions.react";

const mapStateToProps = (state) => ({
    currentOffice: state.currentOffice,
    nextOffice: state.nextOffice,
    vacantOfficeSpace: state.vacantOfficeSpace(),
    currentStaff: state.currentStaff(),
    launchLevel: state.launchLevel
});

const mapDispatchToProps = (dispatch) => ({
    upgradeOffice: () => {
        dispatch(upgradeOffice());
    },
    addErrorMessage: (message) => {
        dispatch(addErrorMessage(message));
    }
});

const OfficeContainer = connect(mapStateToProps, mapDispatchToProps)(OfficeActions);


export default OfficeContainer;
