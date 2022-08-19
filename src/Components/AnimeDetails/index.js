import { Component } from "react";
import "./index.css";

class AnimeDetails extends Component {
  state = { animeDetails: {} };

  componentDidMount() {
    this.getanimeDetails();
  }

  getanimeDetails = async () => {
    const response = await fetch("https://api.jikan.moe/v4/anime/1");
    const fetchedData = await response.json();
    const data = fetchedData["data"];
    const updatedData = {
      imageUrl: data.images.jpg.image_url,
      title: data.title,
      episodes: data.episodes,
      trailerId: data.trailer.url,
      views: data.members,
      duration: data.duration,
      year: data.year,
      description: data.synopsis
    };

    this.setState({ animeDetails: updatedData });
  };

  render() {
    const { animeDetails } = this.state;

    return (
      <div className="main-page">
        <h1 className="heading">Anime Insights</h1>
        <div className="details-container">
          <div>
            <img src={animeDetails.imageUrl} alt="" className="image" />
          </div>
          <div className="right-part">
            <h1 className="title">{animeDetails.title}</h1>
            <p className="details">Episodes: {animeDetails.episodes}</p>
            <p className="details">Duration: {animeDetails.duration}</p>
            <p className="details">Views: {animeDetails.views}</p>
            <p className="details">Year: {animeDetails.year}</p>
            <p className="description">
              <spam className="description-heading">Description: </spam>
              {animeDetails.description}
            </p>
            <div className="button-container">
              <a href={animeDetails.trailerId}>
                <button type="button" className="trailerButton">
                  Play Trailer
                </button>
              </a>
              <button type="button" className="playButton">
                Play show
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AnimeDetails;
