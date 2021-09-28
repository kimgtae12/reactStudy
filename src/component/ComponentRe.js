import React, { useState } from 'react'
import Movie from './Movie';
import AddMovieForm from './AddMovieForm';

function ComponentRe() {
    const [movieList, setMovieList] = useState([
    ]);

    const removeMovie = (id) => {
        setMovieList(movieList.filter(movie => {
            return movie.id !== id;
        }))
    }

    const rendermovie = movieList.length ? movieList.map(movie => {
        return (
            <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
        )
    }) : "추가된 영화가 없습니다.";
    const addMovie = (movie) => {
        setMovieList([
            ...movieList,
            movie
        ]);
    }
    return (
        <div>
            <AddMovieForm addMovie={addMovie} />
            {rendermovie}
        </div>

    );
}

export default ComponentRe;