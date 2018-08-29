import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentList from './CommentList'
import '../App.css'
import { addToList } from '../redux/actions/movieActions'
import { bindActionCreators } from 'redux'
import {CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap'
  let backgroundImg;




class Movie extends Component {
render(){

    const handleClick = (e) => {
      e.preventDefault()
      this.props.addToList(this.props.movies[0].id)
    }

    backgroundImg = this.props.movies[0] ? `https://image.tmdb.org/t/p/original${this.props.movies[0].backdrop_path}` : 'loading...'

  const genres = (array) => {
    let theGenres = []
    for(let i=0; i<array.length; i++){
      theGenres.push(array[i].name)
    }
    return theGenres.join(', ')
  }


  return (
    <div className="card-container">

    <div className="card-img">
       <CardImg src={this.props.movies[0] ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.props.movies[0].poster_path}` : 'loading...'} alt="Card image cap" />
       </div>
       <div className="movie-card-body">
       <CardBody >
         <CardTitle style={{
           fontSize: "50px",
           color: "white",
           fontWeight: "800"
         }}>{this.props.movies[0] ? this.props.movies[0].original_title.length === 0 ? null :
         <p>{this.props.movies[0] ? this.props.movies[0].original_title : 'loading...'}</p> : null}</CardTitle>
         <CardSubtitle style={{
           fontSize: "25px",
           marginBottom: "50px"
         }}>{this.props.movies[0] ? this.props.movies[0].tagline.length === 0 ? null :
         <p>{this.props.movies[0] ? this.props.movies[0].tagline : 'loading...'}</p> : null}</CardSubtitle>
         <CardText>{this.props.movies[0] ? this.props.movies[0].overview.length === 0 ? null :
         <p style={{
           fontSize: "30px",
           color: "white"
         }}>{this.props.movies[0] ? this.props.movies[0].overview : 'loading...'}</p> : null}</CardText>
         <CardText>{this.props.movies[0] ? this.props.movies[0].release_date.length === 0 ? null :
         <p>Release Date: {this.props.movies[0] ? this.props.movies[0].release_date : 'loading...'}</p> : null}</CardText>
         <CardText style={{
           color: "white"
         }}><p>Genre(s): {this.props.movies[0] ? genres(this.props.movies[0].genres) : null}</p></CardText>
         <Button color="primary" className="add-to-list-button" onClick={e => handleClick(e)}>Add To Watchlist</Button>
         <div>
           <CommentList />
         </div>
       </CardBody>
       </div>

</div>
  )

}
componentDidUpdate() {
    document.body.style.backgroundImage = 'url(' + backgroundImg + ')';
  }

}

const mapDispatchToProps = dispatch => bindActionCreators({
  addToList
}, dispatch)

const mapStateToProps = state => ({
  movies: state.movies.currentMovie,
  filterPhrase: state.movies.filterPhrase
})



export default connect(mapStateToProps, mapDispatchToProps)(Movie)
