import React from "react";



function MovieDetail(props) {
  console.log(props)
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h5>Director(s): {props.director}</h5>
      <h5>Genre: {props.genre}</h5>
      <h5>Released: {props.released}</h5>
      <h5>Awards: {props.awards}</h5>
      <h5>Plot: {props.plot}</h5>
      <ul>Ratings: {props.ratings ? props.ratings.map(rating => <li>{rating.Source} {rating.Value}</li>

    ): <li>No ratings available!</li>}</ul>
    </div>
  );
}

export default MovieDetail;
