import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogin } from '../redux/actions/authActions'
import '../App.css'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  submitLogin = e => {
    e.preventDefault()
    this.props.userLogin(this.state, this.props.history)
  }

  render() {
    console.log('state in login', this.state);

    return (
      <Container className="main-wrapper">
        <Row >
        <div className="login-container">
        <Col>
        <h1>Login</h1>
        </Col>
          <Col
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)',
              width: "50vw",
              fontSize: "30px",
              color: "white"
            }}
          >

            <Form onSubmit={this.submitLogin}>
              <FormGroup>
                <Label for="email-field">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email-field"
                  placeholder="email"
                  value={this.state.email}
                  onChange={e => this.setState({email: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password-field">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="pass-field"
                  placeholder="password"
                  value={this.state.password}
                  onChange={e => this.setState({password: e.target.value})}
                />
              </FormGroup>
              {this.props.showLoginError ? (
                <Alert color="primary">
                  Either your email or password is incorrect. Please try again.
                </Alert>
              ) : null}
              <a href="/signup">Not a member?</a>
              <Button className="ml-3" type="submit" color="primary">
                Submit
              </Button>
            </Form>

          </Col>
          </div>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    showLoginError: state.auth.showLoginError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogin: bindActionCreators(userLogin, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
