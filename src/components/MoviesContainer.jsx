import rMovies from '../mocks/with-results.json'

export function MoviesContainer() {

    const movies = rMovies.Search 

    return(
        <div className='grid xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>  
            {
                movies.map(movie => (
                  <div key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.imdbID} />
                  </div>
                ))
            }
        </div>
    )
}