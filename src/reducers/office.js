const office = (state, action) => {
    switch (action.type) {
        case "UPGRADE_OFFICE":
            let newCurrentOffice = state.nextOffice;
            let newNextOffice = {};
            switch (newCurrentOffice.name) {
                case "Garage" :
                    newNextOffice.name = "Grandma's House";
                    newNextOffice.space = 16;
            }
            return Object.assign({}, state, {currentOffice: newCurrentOffice, nextOffice: newNextOffice});
        default:
            return state;
    }
};

export default office;
