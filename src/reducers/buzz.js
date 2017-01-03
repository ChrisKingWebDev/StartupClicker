const buzz = (state, action) => {
    let newBuzz;
    switch (action.type) {
        case "CEO_MARKETING":
            newBuzz =  state.buzz + state.ceoBuzzPerClick;
            if (newBuzz > state.maxBuzz()) {
                newBuzz = state.maxBuzz();
            }
            return Object.assign({}, state, {buzz: newBuzz, ceoMarketingEnabled: false});
        case "HIRE_MARKETER":
            let newMarketers = state.marketers + 1;
            let newCostPerMarketer = state.costPerMarketer + ((Math.floor(newMarketers / 5) + 1)  * 20);
            return Object.assign({}, state, {marketers: newMarketers, buzz: state.buzz - state.costPerMarketer, costPerMarketer: newCostPerMarketer});
        case "PRIMARY_GROWTH":
            newBuzz = state.buzz;
            if (state.buzz < state.maxBuzz()) {
                newBuzz = state.buzz + Math.floor(state.marketers * state.marketerEfficency);
                if (newBuzz > state.maxBuzz()) {
                    newBuzz = state.maxBuzz();
                }
            }
            return Object.assign({}, state, {buzz: newBuzz});
        default:
            return state;
    }
};

export default buzz;
