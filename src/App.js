import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";
import "./App.css";
import Heading from "./components/Heading";
import AddFavorite from "./components/AddFavorite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import RemoveFavorite from "./components/RemoveFavorite";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("batman");
  const [favorites, setFavorites] = useState([]);

  if (searchMovie.length === 0) {
    setSearchMovie("batman");
  }


  //Remove Favorites Function//

  const handleRemoveFavorites = (movie) => {
    const index = favorites.findIndex((item) => item.imdbID === movie.imdbID);
    console.log(index);

    if (index > -1) {
      const removedFavorites = favorites.filter(
        (item) => item.imdbID !== movie.imdbID
      );
      setFavorites(removedFavorites);
    }
  };

  //Add Favorites Function//
  const handleAddFavorites = (movie) => {
    if (favorites.length === 0) {
      const newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
    } else if (favorites.length > 0) {
      const isDuplicate = favorites.some(
        (item) => item.imdbID === movie.imdbID
      );

      if (!isDuplicate) {
        const newFavorites = [...favorites, movie];
        setFavorites(newFavorites);
      } else {
        console.log("Already in the favorites");
      }
    }
  };

  console.log(favorites);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios
          .get(`http://www.omdbapi.com/?s=${searchMovie}&apikey=b63e6085`)
          .then((response) => {
            setMovies(response.data.Search);
          })
          .catch((error) => {
            if (error.response) {
              console.error("Server Error:", error.response.status);
            } else if (error.request) {
              console.error("Network Error:", error.request);
            } else {
              console.error("Error:", error.message);
            }
          });
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    getData();
  }, [searchMovie]);

 

  return (
    <div className="container" id="app-div">
      <Heading
        handleSetSearchMovie={setSearchMovie}
        handleSearchMovie={searchMovie}
      />

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <MovieList
                handleFavorite={handleAddFavorites}
                handleMovies={movies}
                handleFavoriteComponent={AddFavorite}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        
        <div className="col-md-12 mt-4 d-flex align-item-center">
          <h1>
            Favorites{" "}
            <FontAwesomeIcon icon={faStar} fade style={{ color: "#16a085" }} />
          </h1>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <MovieList
                handleFavorite={handleRemoveFavorites}
                handleMovies={favorites}
                handleFavoriteComponent={RemoveFavorite}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
