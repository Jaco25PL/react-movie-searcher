

/* eslint-disable react/prop-types */
function ListedMovies ({ movies }) {

    return (
        <>

        {
            movies.map(movie => (
                <div key={movie.id} className='flex flex-col items-center'>
                    <img className='rounded-lg' src={movie.image} alt={movie.title} />
                    <h3 className='text-center my-2 text-2xl font-semibold text-gray-50'>{movie.title}</h3>
                    <p className='text-lg font-medium text-gray-50'>{movie.year}</p>
                </div>
            ))
        }
        
        </>
    )
}

function NoMovies () {
    return (
        <span className='font-semibold text-gray-50'>No movies found, sorry</span>
    )
}

export function Movies ({ movies }) {

    return (
        movies ? <ListedMovies movies={movies}/> : <NoMovies/>
    )

}



