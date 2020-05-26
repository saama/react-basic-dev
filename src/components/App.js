import React, { Component } from 'react';
// import PeoInfoFrame from './people/container/PeoInfoFrame';
// import RecipeReviewCard from './template/template2';
// import RecipeReviewCard from './template/template2';
// import PublicMap from "./map/MyMap";
import CounterContainer from "./redux/container/CounterContainer";

class App extends Component {
  render() {
    return <CounterContainer  />
    // return <RecipeReviewCard />;
    // return <PeoInfoFrame />;
    // return <RecipeReviewCard />;
  }
}

export default App;