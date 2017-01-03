import { addMessage } from "../actions";
import store from "../index.js";

const money = (state, action) => {
    let newMoneyPerUser;
    let newUserPaymentSeconds;
    switch (action.type) {
        case "PRIMARY_GROWTH":
            let newMoney = state.money;
            let newUsers = state.users;
            newUserPaymentSeconds = state.userPaymentSeconds;
            if (state.launchLevel.level > 3) {
                newUserPaymentSeconds = state.userPaymentSeconds - 1;
                if (newUserPaymentSeconds <= 0) {
                    newUserPaymentSeconds = 5;
                    newMoney = state.money + (state.moneyPerUser * state.users.length);
                    setTimeout(() => {
                        store.dispatch(addMessage("$" + (state.moneyPerUser * state.users.length) + " Added"));
                    });
                    newUsers = [];
                    let lostUsers = 0;
                    for (let user of state.users) {
                        let keepUser = true;
                        if (user.priceTolerance < state.moneyPerUser) {
                            let randSeed = Math.random();
                            let userRandom = (user.priceDings + 1) * 0.1;
                            if (randSeed < userRandom) {
                                keepUser = false;
                                lostUsers++;
                            } else {
                                user.priceDings++;
                            }
                        }
                        if (keepUser) {
                            newUsers.push(user);
                        }
                    }
                    if (lostUsers > 0) {
                        setTimeout(() => {
                            store.dispatch(addMessage("Lost " + (lostUsers) + " User" + (lostUsers > 1 ? "s" : "")));
                        },500);
                    }
                }
            }
            return Object.assign({}, state, {users: newUsers, money: newMoney, userPaymentSeconds: newUserPaymentSeconds});
        case "LOWER_USER_PRICE":
            newMoneyPerUser = state.moneyPerUser - 1;
            return Object.assign({}, state, {moneyPerUser: newMoneyPerUser});
        case "RAISE_USER_PRICE":
            newMoneyPerUser = state.moneyPerUser + 1;
            return Object.assign({}, state, {moneyPerUser: newMoneyPerUser});
        default:
            return state;
    }
};

export default money;
