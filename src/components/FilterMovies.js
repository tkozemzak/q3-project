import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchMovies } from '../redux/actions/movieActions'
import { bindActionCreators } from 'redux'
import SearchedItem from './SearchedItem'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

class FilterMovies extends Component {
  toggle = this.toggle.bind(this);
  state = {
    dropdownOpen: false
  };


toggle() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen
  });
}
  render () {
    let listOfSearched = this.props.items[0] ? this.props.items[0].results.slice(0, 5).map(item => <SearchedItem key={item.id} item={item} />) :
    ''

    return (
      <div>
      <Dropdown disable isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle color="primary" style={{
        width: "213px"
      }}
      caret>
          Search Movies
        </DropdownToggle>
      <DropdownMenu style={{
        background: "black",
        border: "2px solid white",
        opacity: "0.9"
      }}>
      <DropdownItem disabled>
        <input type="text"
          placeholder="Search By Title" onChange={e => this.props.searchMovies(e.target.value)} />
      </DropdownItem>
      {listOfSearched}
      </DropdownMenu>
      </Dropdown>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  searchMovies
}, dispatch)

const mapStateToProps = (state) => {
  return {
    items: state.movies.searchedMovies
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FilterMovies)
