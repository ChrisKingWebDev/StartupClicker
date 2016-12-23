import { connect } from "react-redux";
import Users from "../components/Users.react";

const mapStateToProps = (state) => ({
    users: state.users,
    launchLevel: state.launchLevel
});

const mapDispatchToProps = () => ({
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;
