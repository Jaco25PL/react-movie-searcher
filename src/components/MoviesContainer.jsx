import '../App.css'
// import resultsMovies from '../mocks/with-results.json'

function ListOfMovies ( { movies } ) {


    return(
        <div className='movie-container'>
            {
                movies.map(movie => (
                    <div key={movie.imdbID}  className='movie-box'>
                        <h2>{movie?.Title?.length > 14 ? movie.Title.slice(0, 14) + "..." : movie.Title}</h2>
                        <img src={movie.Poster} alt={movie.Title} />
                        <p>{movie.Year}</p>
                    </div>
                ))
            }
        </div>
    )
}

function NoMoviesResult () {
    return(
        <div>
            <p>No Movies found</p>
        </div>
    )
}

export function MoviesContainer( {movies} ) {

    const hasMovies = movies?.length > 0

    return(
        hasMovies 
        ? <ListOfMovies movies={movies}/>
        : <NoMoviesResult/> 
    )

} 

// export const MoviesContainer = ({ movies }) => {

//     // const movies = resultsMovies.Search
//     const hasMovies = movies?.length > 0

//     console.log(movies);

//     return (
//         <div className='movie-container'>
//             {
//                 hasMovies ? 
//                     movies.map(movie => (
//                       <div key={movie.imdbID}  className='movie-box'>
//                           <h2>{movie?.Title?.length > 14 ? movie.Title.slice(0, 14) + "..." : movie.Title}</h2>
//                           <img src={movie.Poster} alt={movie.Title} />
//                           <p>{movie.Year}</p>
//                       </div>
//                     ))
//                 :
//                 <span>No movies :(</span> 
//             }
//         </div>
//     )

// }