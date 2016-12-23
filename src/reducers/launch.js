const launch = (state, action) => {
    switch (action.type) {
        case "LAUNCH_LEVEL":
            let newLaunchLevel = state.nextLaunchLevel;
            let newNextLaunchLevel = {};
            switch (newLaunchLevel.status) {
                case "In Alpha" :
                    newNextLaunchLevel.status = "In Beta";
                    newNextLaunchLevel.label = "Launch Beta";
                    newNextLaunchLevel.tech = 2500;
                    newNextLaunchLevel.design = 2500;
                    newNextLaunchLevel.level = 3;
            }
            let newTech = state.tech - state.nextLaunchLevel.tech;
            let newDesign = state.design - state.nextLaunchLevel.design;
            return Object.assign({}, state, {launchLevel: newLaunchLevel, nextLaunchLevel: newNextLaunchLevel, tech: newTech, design: newDesign});
        default:
            return state;
    }
};

export default launch;
