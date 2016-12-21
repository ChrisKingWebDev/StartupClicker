import { ceoEnable } from "../actions";
import store from "../index.js";

const timeouts = (state, action) => {
    switch (action.type) {
        case "CEO_CODE":
            setTimeout(() => {
                store.dispatch(ceoEnable());
            }, state.ceoCodeDelay);
            return state;
        case "CEO_ENABLE":
            return Object.assign({}, state, {ceoCodeEnabled: true});
        default:
            return state;
    }
};

export default timeouts;
