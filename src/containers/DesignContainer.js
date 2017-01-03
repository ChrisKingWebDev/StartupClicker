import { connect } from "react-redux";
import { hireDesigner, addErrorMessage } from "../actions";
import DesignActions from "../components/DesignActions.react";

const mapStateToProps = (state) => ({
    design: state.design,
    costPerDesigner: state.costPerDesigner,
    designers: state.designers,
    designerEfficency: state.designerEfficency,
    maxDesign: state.maxDesign(),
    vacantOfficeSpace: state.vacantOfficeSpace(),
    launchLevel: state.launchLevel
});

const mapDispatchToProps = (dispatch) => ({
    hireDesigner: () => {
        dispatch(hireDesigner());
    },
    addErrorMessage: (message) => {
        dispatch(addErrorMessage(message));
    }
});

const DesignContainer = connect(mapStateToProps, mapDispatchToProps)(DesignActions);


export default DesignContainer;
