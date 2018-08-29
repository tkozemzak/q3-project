import React, { Component } from 'react';
import "../App.css"





class Comment extends Component {
    render() {

    return (
      <div className="comment-card">
      <p>{this.props.item.content}</p>
      <p>- {this.props.item.comment_name}</p>
      </div>
    );
  }
}

export default Comment
