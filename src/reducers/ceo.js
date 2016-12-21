import deepFreeze from "deep-freeze";
import expect from "expect";

const ceo = (state, action) => {
    switch (action.type) {
        case "CEO_CODE":
            return Object.assign({}, state, {ceoCodeEnabled: false});
        default:
            return state;
    }
};

const testCeoCode = () => {
    const stateBefore = {ceoCodeEnabled: true};
    const action = {
        type: "CEO_CODE"
    };
    const stateAfter = {ceoCodeEnabled: false};

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(ceo(stateBefore, action)).toEqual(stateAfter);
};

testCeoCode();
console.log("All tests passed");

export default ceo;
