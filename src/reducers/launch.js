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
                    newNextLaunchLevel.buzz = 0;
                    newNextLaunchLevel.level = 3;
                    break;
                case "In Beta" :
                    newNextLaunchLevel.status = "Live";
                    newNextLaunchLevel.label = "Go Live";
                    newNextLaunchLevel.tech = 10000;
                    newNextLaunchLevel.design = 10000;
                    newNextLaunchLevel.buzz = 10000;
                    newNextLaunchLevel.cost = 100000;
                    newNextLaunchLevel.level = 4;
                    break;
                case "Live" :
                    newNextLaunchLevel.status = "Public Company";
                    newNextLaunchLevel.label = "IPO";
                    newNextLaunchLevel.tech = 250000;
                    newNextLaunchLevel.design = 250000;
                    newNextLaunchLevel.buzz = 250000;
                    newNextLaunchLevel.cost = 1000000;
                    newNextLaunchLevel.level = 5;
                    break;
            }
            let newTech = state.tech - state.nextLaunchLevel.tech;
            let newDesign = state.design - state.nextLaunchLevel.design;
            let newBuzz = state.buzz - state.nextLaunchLevel.buzz;
            return Object.assign({}, state,
                {
                    launchLevel: newLaunchLevel,
                    nextLaunchLevel: newNextLaunchLevel,
                    tech: newTech,
                    design: newDesign,
                    buzz: newBuzz
                }
            );
        default:
            return state;
    }
};

export default launch;
