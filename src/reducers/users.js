import { addMessage, userSignups } from "../actions";
import store from "../index.js";
import deepFreeze from "deep-freeze";
import expect from "expect";

const getUserInviteRate = (state) => {
    let percentUsersTech = (state.tech > 0 ? (state.users.length / state.tech) : 1).toFixed(2);
    let percentUsersDesign = (state.design > 0 ? (state.users.length / state.design) : 1).toFixed(2);
    let percentUsers = 1 - (percentUsersTech >= percentUsersDesign ? percentUsersTech : percentUsersDesign);
    //get the percentage of users compared to the tech and design
    // (if the tech and design are low, users won't invite people)
    if (percentUsers > 1) {
        percentUsers = 1;
    }
    if (percentUsers < .0) {
        percentUsers = .0;
    }
    let percentInvite = (percentUsers * .6).toFixed(2);
    if (percentInvite < .1) {
        percentInvite = .1;
    }
    return percentInvite;
};

const getRandomAmount = (seedNum, rate) => {
    //let t0 = performance.now();
    let amount = 0;
    let seeds = 0;
    while (seeds < seedNum) {
        seeds++;
        let randSeed = Math.random();
        //console.log("randSeed" + randSeed);
        if (randSeed < rate) {
            amount++;
        }
    }
    //let t1 = performance.now();
    //console.log("Call to getRandomAmount took " + (t1 - t0) + " milliseconds.");
    return amount;
};

const getSignupRate = (state) => {
    let percentUsersDesign = (state.design > 0 ? (state.users.length / state.design) : 1).toFixed(2);
    let percentUsersBuzz = (state.buzz > 0 ? (state.users.length / state.buzz) : 1).toFixed(2);
    let percentUsers = 1 - (percentUsersBuzz >= percentUsersDesign ? percentUsersBuzz : percentUsersDesign);

    if (percentUsers > 1) {
        percentUsers = 1;
    }
    if (percentUsers < .0) {
        percentUsers = .0;
    }
    let signupRate = (percentUsers * .4).toFixed(2);
    if (signupRate < .05) {
        signupRate = .05;
    }
    console.log(`signupRate ${signupRate}`);
    return signupRate;
};

const getNewUsers = (numNewUsers) => {
    let newUsers = [];
    for (let i = 0; i < numNewUsers; i++) {
        let priceTolerance = Math.ceil(Math.random() * 20);
        let priceDings = 0;
        newUsers.push({priceTolerance, priceDings});
    }
    return newUsers;
};

const users = (state, action) => {
    let newUsers;
    let newUserInviteSeconds;
    switch (action.type) {
        case "CEO_INVITE":
            newUsers = state.users;
            if (state.users.length < 25) {
                newUsers = newUsers.concat(getNewUsers(1));
                setTimeout(() => {
                    store.dispatch(addMessage("New User Signed Up"));
                });
            } else {
                let signupRate = getSignupRate(state);
                let randSeed = Math.random();
                console.log(`randSeed ${randSeed}`);
                if (randSeed < signupRate) {
                    newUsers = newUsers.concat(getNewUsers(1));
                    setTimeout(() => {
                        store.dispatch(addMessage("New User Signed Up"));
                    });
                } else {
                    setTimeout(() => {
                        store.dispatch(addMessage("User Ignored Invite"));
                    });
                }
                console.log(`signupRateRand ${signupRate}`);
            }
            return Object.assign({}, state, {users: newUsers, ceoInviteEnabled: false});
        case "TOGGLE_USER_INVITES":
            return Object.assign({}, state, {allowUserInvites: !state.allowUserInvites});
        case "PRIMARY_GROWTH":
            newUserInviteSeconds = state.userInviteSeconds;
            if (state.launchLevel.level > 2 && state.allowUserInvites) {
                newUserInviteSeconds = state.userInviteSeconds - 1;
                if (newUserInviteSeconds <= 0) {
                    newUserInviteSeconds = 5;

                    let percentInvite = getUserInviteRate(state);
                    console.log("percentInvite " + percentInvite);

                    let invitesSent = getRandomAmount(state.users.length,percentInvite);
                    if (invitesSent > 0) {
                        setTimeout(() => {
                            store.dispatch(addMessage(invitesSent + " User Invite" + (invitesSent > 1 ? "s" : "") + " Sent (" + Math.round(invitesSent / state.users.length * 100) + "%)"));
                        });
                        setTimeout(() => {
                            store.dispatch(userSignups(invitesSent));
                        }, 500);
                    }
                }
            }
            return Object.assign({}, state, {userInviteSeconds: newUserInviteSeconds});
        case "USER_SIGNUPS":
            let userInvites = action.userInvites;
            let signupRate = getSignupRate(state);
            console.log("User Invites: " + userInvites);
            console.log("Signup Rate : " + signupRate);
            let newUsersNum = getRandomAmount(userInvites,signupRate);
            newUsers = getNewUsers(newUsersNum);
            console.log("New Users : " + newUsers.length);
            setTimeout(() => {
                store.dispatch(addMessage(newUsers.length + " User" + (newUsers.length > 1 ? "s" : "") + " Signed Up (" + Math.round(newUsers.length / userInvites * 100) + "%)"));
            });
            return Object.assign({}, state, {users: state.users.concat(newUsers)});
        default:
            return state;
    }
};


const testGetUserInvteRate = () => {
    const equalTech = {tech: 100, design: 500, users: getNewUsers(100)};
    deepFreeze(equalTech);
    expect(getUserInviteRate(equalTech)).toEqual(.1);
    const extraTech = {tech: 200, design: 500, users: getNewUsers(100)};
    deepFreeze(extraTech);
    expect(getUserInviteRate(extraTech)).toEqual(.3);
    const wayToMuchTech = {tech: 2000, design:50000, users: getNewUsers(1)};
    deepFreeze(wayToMuchTech);
    expect(getUserInviteRate(wayToMuchTech)).toEqual(.6);

    const equalDesign = {tech: 500, design: 100, users: getNewUsers(100)};
    deepFreeze(equalDesign);
    expect(getUserInviteRate(equalDesign)).toEqual(.1);
    const extraDesign = {tech: 500, design: 200, users: getNewUsers(100)};
    deepFreeze(extraDesign);
    expect(getUserInviteRate(extraDesign)).toEqual(.3);
    const wayToMuchDesign = {tech: 50000, design: 2000, users: getNewUsers(1)};
    deepFreeze(wayToMuchDesign);
    expect(getUserInviteRate(wayToMuchDesign)).toEqual(.6);

    const equalTechDesign = {tech: 50, design: 50, users: getNewUsers(100)};
    deepFreeze(equalTechDesign);
    expect(getUserInviteRate(equalTechDesign)).toEqual(.1);
};

testGetUserInvteRate();

export default users;
