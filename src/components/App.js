import React, { Component } from 'react';
// import PeoInfoFrame from './people/container/PeoInfoFrame';
// import RecipeReviewCard from './template/template2';
// import RecipeReviewCard from './template/template2';
// import MyMap from "./map/container/MyMapContainer";
import CounterContainer from "./counter/container/CounterContainer";
// import MyModal from "./modal/ModalTest";
// import MyMap from "./map/container/MyMapContainer";

class App extends Component {
  render() {
    // return <MyModal />;
    // return <MyMap  />;
    return <CounterContainer />;
    // return <RecipeReviewCard />;
    // return <PeoInfoFrame />;
    // return <RecipeReviewCard />;
    // return <PublicMap />;
  }
}

export default App;