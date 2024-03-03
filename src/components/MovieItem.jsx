import React, { useState } from "react";

const MovieItem = ({ poster, id, title }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12" style={{ width: "100%", height: "auto" }}>
          <img className="col-12 m-1 p-1" src={poster} alt="poster" />
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
