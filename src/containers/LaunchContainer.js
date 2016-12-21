import { connect } from "react-redux";
import { launchLevel, addMessage } from "../actions";
import LaunchActions from "../components/LaunchActions.react";

const mapStateToProps = (state) => ({
    launchLevel: state.launchLevel,
    nextLaunchLevel: state.nextLaunchLevel,
    tech: state.tech,
    design: state.design
});

const mapDispatchToProps = (dispatch) => ({
    doLaunchLevel: () => {
        dispatch(launchLevel());
    },
    addMessage: (message) => {
        dispatch(addMessage(message));
    }
});

const LaunchContainer = connect(mapStateToProps, mapDispatchToProps)(LaunchActions);

export default LaunchContainer;
