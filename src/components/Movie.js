import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap'
  let backgroundImg;



class Movie extends Component {
render(){

    backgroundImg = this.props.movies[0] ? `https://image.tmdb.org/t/p/original${this.props.movies[0].backdrop_path}` : 'loading...'

  const genres = (array) => {
    let theGenres = []
    for(let i=0; i<array.length; i++){
      theGenres.push(array[i].name)
      console.log(theGenres);
    }
    return theGenres.join(', ')
  }


  return (

    <Card className="card-container">
       <CardImg className="card-img" top width="50%" height="50%" src={this.props.movies[0] ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.props.movies[0].poster_path}` : 'loading...'} alt="Card image cap" />
       <CardBody className="card-body">
         <CardTitle>{this.props.movies[0] ? this.props.movies[0].original_title.length === 0 ? null :
         <p>{this.props.movies[0] ? this.props.movies[0].original_title : 'loading...'}</p> : null}</CardTitle>
         <CardSubtitle>{this.props.movies[0] ? this.props.movies[0].tagline.length === 0 ? null :
         <p>Tagline: {this.props.movies[0] ? this.props.movies[0].tagline : 'loading...'}</p> : null}</CardSubtitle>
         <CardText>{this.props.movies[0] ? this.props.movies[0].overview.length === 0 ? null :
         <p>Summary: {this.props.movies[0] ? this.props.movies[0].overview : 'loading...'}</p> : null}</CardText>
         <CardText>{this.props.movies[0] ? this.props.movies[0].release_date.length === 0 ? null :
         <p>Release Date: {this.props.movies[0] ? this.props.movies[0].release_date : 'loading...'}</p> : null}</CardText>
         <CardText><p>Genre(s): {this.props.movies[0] ? genres(this.props.movies[0].genres) : null}</p></CardText>
         <Button>Button</Button>
       </CardBody>
     </Card>

  )

}
componentDidUpdate() {
    document.body.style.backgroundImage = 'url(' + backgroundImg + ')';
  }

}

const mapStateToProps = state => ({
  movies: state.movies.currentMovie,
  filterPhrase: state.movies.filterPhrase
})

export default connect(mapStateToProps)(Movie)
