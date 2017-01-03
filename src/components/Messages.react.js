import React, { Component, PropTypes } from "react";

class Messages extends Component {
    render() {
        return (
            <div id="messagePanel">
                <h2>Messages</h2>
                {this.renderMessages()}
            </div>
        );
    }
    renderMessages() {
        return this.props.messages.map((message,index) => {
            return (
                <span key={`${index}`} className={message.class} >{message.message}</span>
            );
        });
    }
}

Messages.propTypes = {
    messages: PropTypes.array,
};

export default Messages;
