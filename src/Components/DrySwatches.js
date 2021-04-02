import React, { Component } from "react";
import RowList from "./RowList";

const exampleArray = [
  {
    id: 1,
    data: () => {
      return { name: "Fionn", answers: [1, 2, 4] };
    },
  },
  {
    id: 2,
    data: () => {
      return { name: "Paul", answers: [9, 7, 6] };
    },
  },
];

export class DrySwatches extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date(), rows: [] };
  }

  componentDidMount() {
    const db = this.props.firebase.firestore;

    let swatchesRef = db.collection("swatches");
    let listItems = [];

    this.fireStoreUnsubscribe = swatchesRef.onSnapshot((querySnapshot) => {
      listItems = querySnapshot.docs;

      this.setState({
        rows: listItems,
      });
    });
  }

  componentWillUnmount() {
    this.fireStoreUnsubscribe();
  }

  render() {
    return (
      <div>
        dry swatches
        <RowList data={this.state.rows} />
      </div>
    );
  }
}

export default DrySwatches;
