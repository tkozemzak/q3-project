import React from "react";
import { connect } from "react-redux";
import WatchListItem from "./WatchListItem";

const WatchList = props => {
  console.log("watchlist", props.watchList);

  let watchListItems = props.watchList.map(item => (
    <WatchListItem key={item.id} item={item} />
  ));
  return (
    <div className="watchlist-container">
      <h1 className="watchlist-header">Your Current Watchlist:</h1>
      <div className="watchlist-item-list">{watchListItems}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  watchList: state.movies.watchList
});
export default connect(mapStateToProps)(WatchList);
