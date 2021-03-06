import React, {Component} from 'react';

import './item-list.css';


export default class ItemList extends Component {
 

  state = {
    itemList: [],
  };

  componentDidMount() {
    const {getData} = this.props;
    getData().then(itemList => {
      this.setState({
        itemList,
      });
    });
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const {itemList} = this.state;

    const items = this.renderItems(itemList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
