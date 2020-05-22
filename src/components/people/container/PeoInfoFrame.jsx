import React, { Component } from 'react';
import PeoList from '../presentational/PeoList';

class PeoInfoFrame extends Component {
  state = {
    id: 3,
    peopleList: [
      { id: 0, title: '안녕', contents: '리액트 공부중입니다.' },
      { id: 1, title: '하이', contents: '재밌내요' },
      { id: 2, title: '헬로우', contents: '유용하내요' },
      { id: 3, title: '바이', contents: '신기하내요' }
    ]
  };

  deletePeople = id => {
    const { peopleList } = this.state;
    this.setState({
      peopleList: peopleList.filter(info => info.id !== id)
    });
  };

  render() {
    const { peopleList } = this.state;
    return <PeoList info={peopleList} onRemove={this.deletePeople} />;
  }
}

export default PeoInfoFrame;