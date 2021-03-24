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
      page: 1,
      currentSearch: "cat",
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
        this.setState({
          cats: pictures,
          currentSearch: this.state.searchText,
          searchText: "",
        });
      });
    this.setState({ loading: false });
  };
  onclickNext = () => {
    const nPage = this.state.page + 1;
    client.photos
      .search({
        page: nPage,
        query: this.state.currentSearch,
      })
      .then((pictures) => {
        this.setState({ cats: pictures, page: nPage });
      });

    this.setState({ loading: false });
  };
  onclickPrevious = () => {
    if (this.state.page > 1) {
      const PrevPage = this.state.page - 1;
      client.photos
        .search({
          page: PrevPage,
          query: this.state.currentSearch,
        })
        .then((pictures) => {
          this.setState({ cats: pictures, page: PrevPage });
        });

      this.setState({ loading: false });
    }
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
    const query = this.state.currentSearch;
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
