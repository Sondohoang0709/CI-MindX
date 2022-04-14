import React, { useState } from 'react'
import axios from 'axios';

function Home() {
    const [movies, setMovies] = useState([])
    const [searchMovies, setSearchMovies] = useState('')
    const [listMovies, setListMovies] = useState(null)

    const getMovies = async () => {
        try {
            const response = await axios.get(
                'https://api.themoviedb.org/3/movie/popular?api_key=53e8c3f8601add454121f435253c8a35&page=1'
            )
            setMovies(response.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    getMovies()

    const handleSearchMovies = (e) => {
        e.preventDefault()
        const newList = movies.filter(movie => {
            return movie.title.includes(searchMovies)
        })
        setListMovies(newList);
    }

  return (
    <div>
        <form onSubmit={handleSearchMovies}>
            <input type='text' 
                placeholder="Enter movie's name..."
                value={searchMovies} 
                onChange={(e) => {setSearchMovies(e.target.value)}}
            />
        </form>

        <hr />

        <ul>
            {
                listMovies !== null ? (
                    listMovies.map(movie => (
                        <li key={movie.id}>
                            <span>
                                Title: {movie.title}
                            </span>
                            <div>
                                Overview: {movie.overview}
                            </div>
                        </li>
                    ))
                ) : (
                    movies.map(movie => (
                        <li key={movie.id}>
                            <span>
                                Title: {movie.title}
                            </span>
                            <div>
                                Overview: {movie.overview}
                            </div>
                        </li>
                    ))
                )
            }
        </ul>
    </div>
  )
}

export default Home