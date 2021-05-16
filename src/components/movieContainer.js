import React from 'react'
import MovieList from '../components/movieList'
import MovieForm from './MovieForm'
import {useSelector} from 'react-redux'

const MovieContainer = (props) =>{
    console.log(useSelector((state)=>{
        return state.movies
    }))
    return(
        <div>
            <h1>My Big Movie List</h1>
            <div className="row">
                <MovieList/>
                <MovieForm/>
            </div>
        </div>
    )
}

export default MovieContainer