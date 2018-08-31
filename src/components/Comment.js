import React, { Component } from 'react';
import "../App.css"
import { connect } from 'react-redux'
import { deleteComment } from '../redux/actions/commentActions'
import { bindActionCreators } from 'redux'
import { Button } from 'reactstrap'





class Comment extends Component {

  state = {
    edittedComment: ''
  }

  handleDelete = e => {
    e.preventDefault()
    this.props.deleteComment(this.props.item.id)
  }
    render() {
console.log("props in comment", this.props.item.id);


    return (
      <div className="comment-card">
      <p className="comment-content">{this.props.item.content}</p>
      <p className="comment-name">- {this.props.item.comment_name}</p>
      {this.props.item.comment_name === this.props.currentUser.first_name ?
        <div>
        <Button color="primary" onClick={this.handleDelete}>Delete</Button>
        </div> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteComment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
