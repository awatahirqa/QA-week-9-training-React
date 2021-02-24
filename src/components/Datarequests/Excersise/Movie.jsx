'use strict'


const Movie =  ({film}) => {
    return(
        <>
            <td>{film.Title}</td>
            <td>{film.Year}</td>
            <td>{film.Rated}</td>
            <td>{film.Genre}</td>
            <td>{film.plot}</td>
            
        </>
    )
}

export default Movie; 