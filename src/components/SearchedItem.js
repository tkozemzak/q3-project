import React from 'react'
import { DropdownItem } from 'reactstrap'
import { clickMovie } from '../redux/actions/movieActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



const SearchedItem = (props) => {

const handleClick = (e) => {
  e.preventDefault()
  props.clickMovie(props.item.id)
}

  return (
    <DropdownItem disable> <button onClick={e => handleClick(e)}>{props.item.original_title}</button></DropdownItem>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  clickMovie
}, dispatch)

export default connect(null, mapDispatchToProps)(SearchedItem)
