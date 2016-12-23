const getSignupRate = (state) => {
    let maxSignupRate = .9;
    let minSignupRate = .1;
    let buzzPerUser = 
    if (state.users < 20) {
        return 1; //always signup if there is less than 20
    } else {

    }
}

const users = (state, action) => {
    let newUsers;
    switch (action.type) {
        case "CEO_INVITE":
            let signupRate = getSignupRate(state);
            newUsers = state.users;
            if (state.users < 25) {
                newUsers++;
            }
            return Object.assign({}, state, {users: newUsers, ceoInviteEnabled: false});
        default:
            return state;
    }
};

export default users;
