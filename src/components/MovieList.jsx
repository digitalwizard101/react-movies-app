import React, { useState } from 'react'
import MovieItem from './MovieItem'

const MovieList = ({ handleMovies, handleFavoriteComponent, handleFavorite }) => {
    const FavoriteComponent = handleFavoriteComponent



    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='d-flex align-items-center ' id="movie-list-div">
                    {
                        handleMovies?.map((movie) => {
                            return (

                                <div key={movie.imdbID} className='image-container'>

                                    <MovieItem poster={movie.Poster} title={movie.Title} id={movie.imdbID} />
                                    <div onClick={() => handleFavorite(movie)} className='d-flex overlay justify-content-center align-item-center'>
                                        <FavoriteComponent />
                                    </div>
                                </div>



                            )
                        })
                    }

                </div>

            </div>






        </div>
    )
}

export default MovieList








