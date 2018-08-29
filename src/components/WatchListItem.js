import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeFromList } from '../redux/actions/movieActions'
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';
  import '../App.css'


const WatchListItem = (props) => {

  return (
    <div className="watchlist-item">
    <Card style={{
      background: "black",
      color: "white"
    }}>
    <CardImg style={{
      alignSelf: "center",
      marginTop: "20px",
      width: "100px",
      height: "100px",
    }} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.item.poster_path}`} alt="Card image cap" />
    <CardBody>
      <CardTitle>{props.item.original_title}</CardTitle>
      <Button className="remove-from-list-button" color="primary" onClick={() => props.removeFromList(props.item.id)}>Remove from Watchlist</Button>        </CardBody>
    </Card>
    </div>
)
}

const mapDispatchToProps = dispatch => bindActionCreators({
  removeFromList
}, dispatch)

export default connect(null, mapDispatchToProps)(WatchListItem)
