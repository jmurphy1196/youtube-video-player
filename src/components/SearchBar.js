import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";
import "../video.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };
  }

  handleChange = (event) => {
    let value = event.target.value;

    this.setState(() => {
      return {
        searchTerm: value,
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
  };
  render() {
    return (
      <Paper elevation={0} style={{ padding: "25px" }}>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Search..."
            className="search"
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
