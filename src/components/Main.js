import React, { Component } from 'react';
import Movie from './Movie'
import WatchList from './WatchList'
import CommentList from './CommentList'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Row } from 'reactstrap'

class Main extends Component {
  render () {
    return (
      <Container className="container">
      <div>
      <Row>
      <Col>
      <Movie />
      </Col>
      </Row>
      </div>
      <div>
      <Row>
      <Col>
      <CommentList />
      </Col>
      </Row>
      </div>
      <div>
      <Row>
      <Col>
      <WatchList />
      </Col>
      </Row>
      </div>
      </Container>


    )
  }
}

export default Main;
