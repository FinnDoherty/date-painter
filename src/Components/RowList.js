import { Box, Container, Grid } from "@material-ui/core";
import React, { Component } from "react";

class RowList extends Component {
  render() {
    let i = 0;

    const listItems = this.props.data.map((doc) => (
      <div key={doc.id} style={{ height: "100px", margin: "20px 0" }}>
        <Grid container spacing={3} direction="row" justify="center" alignItems="center">

          <Box width="20%">{doc.data().name}</Box>

          {doc.data().answers.map((answer) => {
            i++;
            return (<Grid key={i} item xs={1}>{answer}</Grid>);
          })}

        </Grid>
      </div>
    ));

    return <Container>{listItems}</Container>;
  }
}

export default RowList;
