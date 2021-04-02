import React, { Component } from "react";

class RowList extends Component {
  render() {
    const listItems = this.props.data.map((doc) => (
      <li key={doc.id}>
        {doc.data().name} {doc.data().answers}
      </li>
    ));

    return <ul>{listItems}</ul>;
  }
}

export default RowList;
