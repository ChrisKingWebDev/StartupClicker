import { connect } from "react-redux";
import { toggleUserInvites } from "../actions";
import Users from "../components/Users.react";

const mapStateToProps = (state) => ({
    users: state.users,
    launchLevel: state.launchLevel,
    allowUserInvites: state.allowUserInvites
});

const mapDispatchToProps = (dispatch) => ({
    toggleUserInvites: () => {
        dispatch(toggleUserInvites());
    }
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;
