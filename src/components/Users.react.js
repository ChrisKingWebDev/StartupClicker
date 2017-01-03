import React, { Component, PropTypes } from "react";
import {FormattedNumber} from "react-intl";

class Users extends Component {
    render() {
        if (this.props.launchLevel.level > 0) {
            return (
                <div id="usersPanel">
                    <h3>Users: <FormattedNumber value={this.props.users.length} /></h3>
                    { this.renderAllowUserInvites()}
                    <div className="clear"></div>
                </div>
            );
        } else {
            return null;
        }
    }
    renderAllowUserInvites() {
        if (this.props.launchLevel.level > 2) {
            return (
                <span className="invites">
                    <input type="checkbox" checked={this.props.allowUserInvites} onClick={this.props.toggleUserInvites}  /> Allow user invites
                </span>
            );
        }
    }
}

Users.propTypes = {
    users: PropTypes.array,
    launchLevel: PropTypes.object,
    allowUserInvites: PropTypes.bool,
    toggleUserInvites: PropTypes.func
};

export default Users;
