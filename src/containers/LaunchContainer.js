import { connect } from "react-redux";
import { launchLevel, addErrorMessage } from "../actions";
import LaunchActions from "../components/LaunchActions.react";

const mapStateToProps = (state) => ({
    launchLevel: state.launchLevel,
    nextLaunchLevel: state.nextLaunchLevel,
    tech: state.tech,
    design: state.design,
    buzz: state.buzz
});

const mapDispatchToProps = (dispatch) => ({
    doLaunchLevel: () => {
        dispatch(launchLevel());
    },
    addErrorMessage: (message) => {
        dispatch(addErrorMessage(message));
    }
});

const LaunchContainer = connect(mapStateToProps, mapDispatchToProps)(LaunchActions);

export default LaunchContainer;
