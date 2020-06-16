import React from "react";



function MovieDetail(props) {
  console.log(props)
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h6>Director(s): {props.director}</h6>
      <h6>Released: {props.released}</h6>
      <p>
      <div class="alert alert-primary" role="alert">
        AWARDS
      </div>
      {props.awards}</p>
      <p>
      <div class="alert alert-warning" role="alert">
        PLOT
      </div>
      {props.plot}</p>
      <ul className="list-group">
      <div class="alert alert-success" role="alert">
        RATINGS
      </div>
      {props.ratings ? props.ratings.map(rating => <li className="list-group-item list-group-item-action">{rating.Source} {rating.Value}</li>

    ): <li>No ratings available!</li>}</ul>
    </div>
  );
}

export default MovieDetail;
