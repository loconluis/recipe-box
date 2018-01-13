import React from 'react';
import { ListGroupItem } from 'reactstrap';

export default class IngredientsItems extends React.Component {
  render() {
    return (
      <ListGroupItem>{this.props.name}</ListGroupItem>
    );
  }
}