import React, { Component } from "react";
import Header from "../Component/Header";
import { createClient } from "pexels";
import CatList from "../Component/CatList";
import ErrorBoundary from "../Component/ErrorHandler";

const client = createClient(
  "563492ad6f917000010000018143febfdb204fbab7dda5d93c97b7b4"
);
class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchText: "",
      loading: false,
    };
  }

  onclick = () => {
    const query =
      this.state.searchText.length > 0 ? this.state.searchText : "cat";
    const orientation = "landscape";
    const page = 1;
    client.photos
      .search({ query, orientation, page, per_page: 80 })
      .then((pictures) => {
        this.setState({ cats: pictures });
      });
    this.setState({ searchText: "" });
    this.setState({ loading: false });
  };
  onclickNext = () => {
    const nextPage = this.state.cats.next_page;
    client.photos
      .search({
        nextPage,
      })
      .then((pictures) => {
        this.setState({ cats: pictures });
      });
    console.log("hey", nextPage);
    console.log("oh", this.state.cats);

    this.setState({ loading: false });
  };
  onclickPrevious = () => {
    const previousPage = this.state.cats.prev_page;
    client.photos
      .search({
        previousPage,
      })
      .then((pictures) => {
        this.setState({ cats: pictures });
      });
    console.log("yay", previousPage);

    this.setState({ loading: false });
  };

  onKeyPress = (event) => {
    if (event.key === "Enter") {
      const query =
        this.state.searchText.length > 0 ? this.state.searchText : "cat";
      const orientation = "landscape";
      const page = 1;
      client.photos
        .search({ query, orientation, page, per_page: 80 })
        .then((pictures) => {
          this.setState({ cats: pictures });
        });
      this.setState({ searchText: "" });
    }
  };
  onsearch = (event) => {
    this.setState({ searchText: event.target.value });
  };
  componentDidMount() {
    const query = "cats";
    const orientation = "landscape";
    const page = 1;
    this.setState({ loading: false });
    client.photos
      .search({ query, orientation, page, per_page: 80 })
      .then((pictures) => {
        this.setState({ cats: pictures });
      });
    this.setState({ loading: false });
  }

  render() {
    const { cats, searchText, loading } = this.state;
    const catPictures = cats.photos;

    return (
      <div className="App">
        <Header
          nextCat={this.onclickNext}
          previous={this.onclickPrevious}
          onclick={this.onclick}
          onsearch={this.onsearch}
          value={searchText}
          keyPress={this.onKeyPress}
        />
        {this.state.loading === true ? (
          <div className="loader">
            <hi>loading....</hi>
          </div>
        ) : (
          <ErrorBoundary>
            <div className="catContainer">
              {catPictures && <CatList catsPhoto={catPictures} />}
            </div>
          </ErrorBoundary>
        )}
      </div>
    );
  }
}

export default App;
