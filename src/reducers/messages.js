import deepFreeze from "deep-freeze";
import expect from "expect";

const messages = (state, action) => {
    let newMessages;
    switch (action.type) {
        case "ADD_MESSAGE":
            // newMessages = Object.assign({},state).messages;
            // newMessages.unshift(action.message);
            newMessages = [action.message, ...state.messages];
            if (newMessages.length === 6) {
                newMessages.splice(5,1);
            }
            return Object.assign({}, state, {messages: newMessages});
        default:
            return state;
    }
};

const testAddMessage = () => {
    const stateBefore = {messages: ["test1"]};
    const action = {
        type: "ADD_MESSAGE",
        message: "test2"
    };
    const stateAfter = {messages: ["test2", "test1"]};

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(messages(stateBefore, action)).toEqual(stateAfter);


    const stateLotsBefore = {messages: ["test1","test2","test3","test4","test5"]};
    const actionLots = {
        type: "ADD_MESSAGE",
        message: "test6"
    };
    const stateLotsAfter = {messages: ["test6", "test1","test2","test3","test4"]};

    deepFreeze(stateLotsBefore);
    deepFreeze(actionLots);
    expect(messages(stateLotsBefore, actionLots)).toEqual(stateLotsAfter);
};

testAddMessage();
console.log("All messages tests passed");

export default messages;
