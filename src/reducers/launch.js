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
            }
            return Object.assign({}, state, {launchLevel: newLaunchLevel, nextLaunchLevel: newNextLaunchLevel});
        default:
            return state;
    }
};

export default launch;
