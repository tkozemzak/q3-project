import React, { Component } from 'react';
import Comment from './Comment'
import "../App.css"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { addComment } from '../redux/actions/commentActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'





  class CommentList extends Component {
  state = {
      content: '',
      comment_name: this.props.currentUser.first_name,
      movie_id: this.props.currentMovie.id
    }

    handleSubmit = e => {
      e.preventDefault()
      this.props.addComment(this.state)
      e.target.reset();
    }

  render() {
    console.log("user", this.props.currentUser);
let listOfComments = this.props.comments.length > 0 ? this.props.comments[0].results.filter(item => item.movie_id === this.props.currentMovie[0].id).map(item => <Comment key={item.id} item={item}/>) : null

    return (
      <div className="comment-section-container">
        <div className="comment-header">
          <h1>Comments:</h1>
      </div>
            <div className="comment-and-form-container">
              <div className="comment-list">
                <ul>{listOfComments}</ul>
              </div>
                 <div className="comment-form">
                <Form onSubmit={this.handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label>Leave A Comment:</Label>
                  <Input type="textarea" name="comment" id="comment-field" placeholder="Enter a comment here" onChange={e => this.setState(this.props.currentMovie[0] ? {content: e.target.value, movie_id: this.props.currentMovie[0].id} : null)}/>

                </FormGroup>
                <Button color="primary">Submit</Button>
                </Form>
                  </div>
            </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  addComment
}, dispatch)


const mapStateToProps = state => ({
  comments: state.comments.comments,
  currentMovie: state.movies.currentMovie,
  currentUser: state.auth.user
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
