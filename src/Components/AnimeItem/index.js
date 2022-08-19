import { Link } from "react-router-dom";
import { Component } from "react";
import "./index.css";

class Anime extends Component {
  render() {
    const { animeDeatails } = this.props;
    const { title, mal_id, images, rating } = animeDeatails;
    const { jpg } = images;
    const { image_url } = jpg;

    return (
      <Link to={`/anime-details/${mal_id}`}>
        <li className="list_item" id={mal_id}>
          <div>
            <img src={image_url} alt={image_url} className="item_image" />
            <h1 className="item_heading">{title}</h1>
            <p className="item_rating">
              <spam className="rating-heading">Rating: </spam>
              {rating}
            </p>
          </div>

          <button type="button" className="add-button">
            <spam>Add to WatchList</spam>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </button>
        </li>
      </Link>
    );
  }
}

export default Anime;
