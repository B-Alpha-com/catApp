import React, { Component } from "react";
import Header from "../Component/Header";
import { createClient } from "pexels";
import CatList from "../Component/CatList";
import NextPage from "../Component/NextPageButton";
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
    const page = 6;
    client.photos
      .search({ query, orientation, page, per_page: 80 })
      .then((pictures) => {
        this.setState({ cats: pictures });
      });
    this.setState({ searchText: "" });
    this.setState({ loading: false });
  };

  onKeyPress = (event) => {
    if (event.key === "Enter") {
      const query =
        this.state.searchText.length > 0 ? this.state.searchText : "cat";
      const orientation = "landscape";
      const page = 6;
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
    const page = 6;
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
    const nextCat = cats.next_page;

    return (
      <div className="App">
        <Header
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
            <NextPage nextCat={nextCat} />
          </ErrorBoundary>
        )}
      </div>
    );
  }
}

export default App;
