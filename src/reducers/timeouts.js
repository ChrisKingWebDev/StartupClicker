import { ceoCodeEnable, ceoDesignEnable, ceoInviteEnable } from "../actions";
import store from "../index.js";

const timeouts = (state, action) => {
    switch (action.type) {
        case "CEO_CODE":
            setTimeout(() => {
                store.dispatch(ceoCodeEnable());
            }, state.ceoCodeDelay);
            return state;
        case "CEO_CODE_ENABLE":
            return Object.assign({}, state, {ceoCodeEnabled: true});
        case "CEO_DESIGN":
            setTimeout(() => {
                store.dispatch(ceoDesignEnable());
            }, state.ceoDesignDelay);
            return state;
        case "CEO_DESIGN_ENABLE":
            return Object.assign({}, state, {ceoDesignEnabled: true});
        case "CEO_INVITE":
            setTimeout(() => {
                store.dispatch(ceoInviteEnable());
            }, state.ceoInviteDelay);
            return state;
        case "CEO_INVITE_ENABLE":
            return Object.assign({}, state, {ceoInviteEnabled: true});
        default:
            return state;
    }
};

export default timeouts;
