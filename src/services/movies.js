export async function fetching ({ search }) {

    if(search === '') return null
    
    const API_KEY = '4287ad07'

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        if(!response.ok){
            throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }
        const movies = await response.json()

        const mappedMovies = movies.Search?.map(movie => ({
          id: movie.imdbID,
          image: movie.Poster,
          title: movie.Title,
          year: movie.Year,
          type: movie.type
        }))

        return mappedMovies 

        } catch (error) {
            console.log("Error fetchaing data", error)
            throw error
        } 
}
