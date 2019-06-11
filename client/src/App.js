import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />

        {/* // This path determines the path used on line 13 in the section
        
        componentDidMount() {
        // change this line to grab the id passed on the URL
        --> const id = this.props.match.params.id; <--
        this.fetchMovie(id);
  }   
         */}

        <Route path="/movie/:id" component={Movie} />
      </div>
    );
  }
}
