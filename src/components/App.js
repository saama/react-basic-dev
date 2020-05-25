import React, { Component } from 'react';
import PeoInfoFrame from './people/container/PeoInfoFrame';
import RecipeReviewCard from './template/template1';
import RecipeReviewCard2 from './template/template2';
import MapFrame from './map/Map';

class App extends Component {
  render() {
    // return <RecipeReviewCard />;
    // return <PeoInfoFrame />;
    return <MapFrame />;
  }
}

export default App;