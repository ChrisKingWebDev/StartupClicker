import { connect } from "react-redux";
import { ceoCode, addMessage } from "../actions";
import CEOActions from "../components/CEOActions.react";

const mapStateToProps = (state) => ({
    codeEnabled: state.ceoCodeEnabled,
    ceoTechPerCode: state.ceoTechPerCode,
    tech: state.tech,
    serverSpace: state.serverSpace()
});

const mapDispatchToProps = (dispatch) => ({
    doCeoCode: () => {
        dispatch(ceoCode());
    },
    addMessage: (message) => {
        dispatch(addMessage(message));
    }
});

const CEOContainer = connect(mapStateToProps, mapDispatchToProps)(CEOActions);

export default CEOContainer;
