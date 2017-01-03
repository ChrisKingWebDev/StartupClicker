const design = (state, action) => {
    let newDesign;
    switch (action.type) {
        case "CEO_DESIGN":
            newDesign =  state.design + state.ceoDesignPerClick;
            if (newDesign > state.maxDesign()) {
                newDesign = state.maxDesign();
            }
            return Object.assign({}, state, {design: newDesign, ceoDesignEnabled: false});
        case "HIRE_DESIGNER":
            let newDesigners = state.designers + 1;
            let newCostPerDesigner = state.costPerDesigner + ((Math.floor(newDesigners / 5) + 1)  * 10);
            return Object.assign({}, state, {designers: newDesigners, design: state.design - state.costPerDesigner, costPerDesigner: newCostPerDesigner});
        case "PRIMARY_GROWTH":
            newDesign = state.design;
            if (state.design < state.maxDesign()) {
                newDesign = state.design + Math.floor(state.designers * state.designerEfficency);
                if (newDesign > state.maxDesign()) {
                    newDesign = state.maxDesign();
                }
            }
            return Object.assign({}, state, {design: newDesign});
        default:
            return state;
    }
};

export default design;
