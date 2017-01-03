const office = (state, action) => {
    switch (action.type) {
        case "UPGRADE_OFFICE":
            let newCurrentOffice = state.nextOffice;
            let newNextOffice = {};
            let newMoney = state.money - (newCurrentOffice.cost ? newCurrentOffice.cost : 0);
            switch (newCurrentOffice.name) {
                case "Garage" :
                    newNextOffice.name = "Grandma's House";
                    newNextOffice.space = 15;
                    break;
                case "Grandma's House" :
                    newNextOffice.name = "Incubator";
                    newNextOffice.space = 30;
                    break;
                case "Incubator" :
                    newNextOffice.name = "Office";
                    newNextOffice.floor = 1;
                    newNextOffice.space = 80;
                    newNextOffice.cost = 50000;
                    break;
                case "Office" :
                    newNextOffice.name = "Office";
                    newNextOffice.floor = newCurrentOffice.floor + 1;
                    newNextOffice.space = newCurrentOffice.space + 50;
                    newNextOffice.cost = newCurrentOffice.cost * 1.25;
                    break;
            }
            return Object.assign({}, state, {currentOffice: newCurrentOffice, nextOffice: newNextOffice, money: newMoney});
        default:
            return state;
    }
};

export default office;
