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
import { userSignup } from '../redux/actions/authActions'
import '../App.css'

export class Signup extends Component {
  state = {
    isValid: true,
    passwordClasses: 'form-control',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    verify_password: ''
  }
  userSignup = e => {
    e.preventDefault()
    let { first_name, last_name, email, password, verify_password } = this.state
    if (!password || password !== verify_password || !verify_password) {
      this.setState({
        passwordClasses: this.state.passwordClasses + ' is-invalid',
        isValid: false
      })
    } else {
      let newUser = {first_name, last_name, email, password}
      console.log('newUser', newUser)
      this.props.userSignup(newUser, this.props.history)
    }
  }

  render() {
    return (
      <Container className="main-wrapper">
        <Row className="signup-container" style={{ marginTop: '10vh', marginBottom: '10vh' }}>
        <div>
        <Col>
        <h1>Register</h1>
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
            <Form className="signup-form" onSubmit={this.userSignup}>
              <FormGroup>
                <Label for="first_name">First Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name-field"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={e =>
                    this.setState({ first_name: e.target.value })
                  }
                />
                </FormGroup>
              <FormGroup>
                <Label for="last_name">Last Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name-field"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={e =>
                    this.setState({ last_name: e.target.value })
                  }
                />

              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email-field"
                  placeholder="email"
                  value={this.state.email}
                  onChange={e =>
                    this.setState({ email: e.target.value })
                  }
                />



              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password-field"
                  placeholder="password"
                  value={this.state.password}
                  onChange={e =>
                    this.setState({ password: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="verify_password">Verify Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="verify_password"
                  placeholder="password"
                  value={this.state.verify_password}
                  onChange={e =>
                    this.setState({ verify_password: e.target.value })
                  }
                />
                {!this.state.isValid ? (
                  <Alert color="danger">Passwords do not match</Alert>
                ) : null}
              </FormGroup>
              <Button color="primary" type="submit">
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

const mapDispatchToProps = dispatch => {
  return {
    userSignup: bindActionCreators(userSignup, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Signup)
