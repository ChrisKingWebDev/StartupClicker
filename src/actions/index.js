export const primaryGrowth = () => ({
    type: "PRIMARY_GROWTH"
});
export const addMessage = (message) => ({
    type: "ADD_MESSAGE",
    message
});
export const addErrorMessage = (message) => ({
    type: "ADD_ERROR_MESSAGE",
    message
});

//CEO Actions
export const ceoCode = () => ({
    type: "CEO_CODE"
});
export const ceoCodeEnable = () => ({
    type: "CEO_CODE_ENABLE"
});
export const ceoDesign = () => ({
    type: "CEO_DESIGN"
});
export const ceoDesignEnable = () => ({
    type: "CEO_DESIGN_ENABLE"
});
export const ceoInvite = () => ({
    type: "CEO_INVITE"
});
export const ceoInviteEnable = () => ({
    type: "CEO_INVITE_ENABLE"
});
export const ceoMarketing = () => ({
    type: "CEO_MARKETING"
});
export const ceoMarketingEnable = () => ({
    type: "CEO_MARKETING_ENABLE"
});

//Coder Actions
export const hireCoder = () => ({
    type: "HIRE_CODER"
});

//Designer Actions
export const hireDesigner = () => ({
    type: "HIRE_DESIGNER"
});

//Marketer Actions
export const hireMarketer = () => ({
    type: "HIRE_MARKETER"
});

//Server Actions
export const buyServer = () => ({
    type: "BUY_SERVER"
});

export const upgradeServers = () => ({
    type: "UPGRADE_SERVERS"
});

//offices
export const upgradeOffice = () => ({
    type: "UPGRADE_OFFICE"
});

//launch
export const launchLevel = () => ({
    type: "LAUNCH_LEVEL"
});

//users
export const toggleUserInvites = () => ({
    type: "TOGGLE_USER_INVITES"
});

export const userSignups = (userInvites) => ({
    type: "USER_SIGNUPS",
    userInvites
});

//money
export const lowerUserPrice = () => ({
    type: "LOWER_USER_PRICE"
});

export const raiseUserPrice = () => ({
    type: "RAISE_USER_PRICE"
});
