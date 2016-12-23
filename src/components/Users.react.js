import React, { Component, PropTypes } from "react";

class Users extends Component {
    render() {
        if (this.props.launchLevel.level > 0) {
            return (
                <div id="usersPanel" className="resoursePanel">
                    <h3>Users: {this.props.users}</h3>
                </div>
            );
        } else {
            return null;
        }
    }
}

Users.propTypes = {
    users: PropTypes.number,
    launchLevel: PropTypes.object
};

export default Users;
