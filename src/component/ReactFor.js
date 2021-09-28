import React from 'react';

function ReactFor() {

    const MovieList = [
        { title: '영화1', year: 2021 },
        { title: '영화2', year: 2020 },
        { title: '영화3', year: 2019 }
    ]

    const renderMovies = MovieList.map(movie => {
        return (
            <div className="movie">
                <div className="movie-title">{movie.title}</div>
                <div className="movie-year">{movie.year}</div>
            </div>
        )

    });

    return (
        <div>
            {renderMovies}
        </div>
    )
}

export default ReactFor;

