import { connect } from "react-redux";
import { ceoCode, ceoDesign, ceoMarketing, ceoInvite, addErrorMessage } from "../actions";
import CEOActions from "../components/CEOActions.react";

const mapStateToProps = (state) => ({
    ceoCodeEnabled: state.ceoCodeEnabled,
    ceoDesignEnabled: state.ceoDesignEnabled,
    ceoInviteEnabled: state.ceoInviteEnabled,
    ceoMarketingEnabled: state.ceoMarketingEnabled,
    ceoTechPerCode: state.ceoTechPerCode,
    tech: state.tech,
    serverSpace: state.serverSpace(),
    design: state.design,
    maxDesign: state.maxDesign(),
    buzz: state.buzz,
    maxBuzz: state.maxBuzz(),
    launchLevel: state.launchLevel
});

const mapDispatchToProps = (dispatch) => ({
    ceoCode: () => {
        dispatch(ceoCode());
    },
    ceoDesign: () => {
        dispatch(ceoDesign());
    },
    ceoMarketing: () => {
        dispatch(ceoMarketing());
    },
    ceoInvite: () => {
        dispatch(ceoInvite());
    },
    addErrorMessage: (message) => {
        dispatch(addErrorMessage(message));
    }
});

const CEOContainer = connect(mapStateToProps, mapDispatchToProps)(CEOActions);

export default CEOContainer;
