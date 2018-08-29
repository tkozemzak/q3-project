<div className="comment-form">
  <Form onSubmit={this.handleSubmit}>
  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
  <Label>Leave A Comment:</Label>
    <Input type="textarea" name="comment" id="comment-field" placeholder="Enter a comment here" onChange={e => this.setState(this.props.currentMovie[0] ? {content: e.target.value, movie_id: this.props.currentMovie[0].id} : null)}/>
    <Input type="text" name="comment-name" id="comment-name-field" placeholder="Enter your name here" onChange={e => this.setState({comment_name: e.target.value})}/>
  </FormGroup>
  <Button color="primary">Submit</Button>
  </Form>
</div>



<Router>
<div>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/topics">Topics</Link></li>
</ul>

<hr/>

<Route exact path="/" component={HomePage}/>

</div>
</Router>
