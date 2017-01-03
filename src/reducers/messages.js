import deepFreeze from "deep-freeze";
import expect from "expect";

const messages = (state, action) => {
    let newMessages;
    switch (action.type) {
        case "ADD_MESSAGE":
            newMessages = [{message: action.message}, ...state.messages];
            if (newMessages.length === 6) {
                newMessages.splice(5,1);
            }
            return Object.assign({}, state, {messages: newMessages});
        case "ADD_ERROR_MESSAGE":
            newMessages = [{message: action.message, class:"error"}, ...state.messages];
            if (newMessages.length === 6) {
                newMessages.splice(5,1);
            }
            return Object.assign({}, state, {messages: newMessages});
        default:
            return state;
    }
};

const testAddMessage = () => {
    const stateBefore = {messages: [{message: "test1"}]};
    const action = {
        type: "ADD_MESSAGE",
        message: "test2"
    };
    const stateAfter = {messages: [{message: "test2"}, {message: "test1"}]};

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(messages(stateBefore, action)).toEqual(stateAfter);


    const stateLotsBefore = {messages: [{message: "test1"},{message: "test2"},{message: "test3"},{message: "test4"},{message: "test5"}]};
    const actionLots = {
        type: "ADD_MESSAGE",
        message: "test6"
    };
    const stateLotsAfter = {messages: [{message: "test6"},{message: "test1"},{message: "test2"},{message: "test3"},{message: "test4"}]};

    deepFreeze(stateLotsBefore);
    deepFreeze(actionLots);
    expect(messages(stateLotsBefore, actionLots)).toEqual(stateLotsAfter);
};

testAddMessage();
console.log("All messages tests passed");

export default messages;
