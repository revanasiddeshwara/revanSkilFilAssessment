import { Component } from "react";

import Anime from "../AnimeItem";

import "./index.css";

class Home extends Component {
  state = { animeList: [], searchInput: "" };

  componentDidMount() {
    this.getAnimeData();
  }

  getAnimeData = async () => {
    const response = await fetch("https://api.jikan.moe/v4/anime");
    const fetchedData = await response.json();
    const data = fetchedData["data"];
    this.setState({ animeList: data });
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { animeList, searchInput } = this.state;
    const searchResults = animeList.filter((eachAnime) =>
      eachAnime.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="bg-container">
        <h1 className="main-heading">SKILFIL ANIME</h1>
        <div className="features-container">
          <div>
            <label className="search-title" for="search-input">
              Search
            </label>
            <input
              type="search"
              placeholder="Search   by   Title"
              className="search-bar"
              id="search-input"
              onChange={this.onChangeSearchInput}
            />
          </div>

          <div class="input-group mb-3 genre-container">
            <div class="input-group-prepend">
              <label
                class="input-group-text label-text"
                for="inputGroupSelect01"
              >
                Filter
              </label>
            </div>
            <select class="custom-select select-option" id="inputGroupSelect01">
              <option selected className="option-value">
                Filter By Genres...
              </option>
              <option value="1">Action</option>
              <option value="2">Adventure</option>
              <option value="3">Comedy</option>
              <option value="4">Avant Garde</option>
              <option value="5">Mystery</option>
              <option value="6">Drama</option>
              <option value="7">Ecchi</option>
              <option value="8">Fantasy</option>
              <option value="9">Horror</option>
              <option value="10">Romance</option>
              <option value="11">Sci-fi</option>
              <option value="12">Sports</option>
              <option value="13">Slice of Life</option>
              <option value="14">Supernatural</option>
              <option value="15">Suspense</option>
              <option value="16">Gourmet</option>
            </select>
          </div>
        </div>

        <ul className="list_container">
          {searchResults.map((eachItem) => (
            <Anime animeDeatails={eachItem} key={eachItem.mal_id} />
          ))}
        </ul>
      </div>
    );
  }
}
export default Home;
