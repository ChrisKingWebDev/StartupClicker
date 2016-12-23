import { connect } from "react-redux";
import { ceoCode, ceoDesign, ceoInvite, addMessage } from "../actions";
import CEOActions from "../components/CEOActions.react";

const mapStateToProps = (state) => ({
    ceoCodeEnabled: state.ceoCodeEnabled,
    ceoDesignEnabled: state.ceoDesignEnabled,
    ceoInviteEnabled: state.ceoInviteEnabled,
    ceoTechPerCode: state.ceoTechPerCode,
    tech: state.tech,
    serverSpace: state.serverSpace(),
    design: state.design,
    maxDesign: state.maxDesign(),
    launchLevel: state.launchLevel
});

const mapDispatchToProps = (dispatch) => ({
    ceoCode: () => {
        dispatch(ceoCode());
    },
    ceoDesign: () => {
        dispatch(ceoDesign());
    },
    ceoInvite: () => {
        dispatch(ceoInvite());
    },
    addMessage: (message) => {
        dispatch(addMessage(message));
    }
});

const CEOContainer = connect(mapStateToProps, mapDispatchToProps)(CEOActions);

export default CEOContainer;
