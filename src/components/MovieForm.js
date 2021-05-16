import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addMovie} from '../Actions/Actions'
import MovieStats from './MovieStats'



const MovieForm = (props) =>{
    const [movieName, setMovieName] = useState('')
    const [rankValue, setRankValue] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
          e.preventDefault()
          const data = {
              id : Number(new Date),
              name : movieName,
              rank : rankValue
          }
          dispatch(addMovie(data))
          setMovieName('')
          setRankValue('')
    }

     const handleChange = (e) =>{
         if(e.target.name === 'movie'){
           setMovieName(e.target.value)
         }else if (e.target.name === 'rank'){
           setRankValue(e.target.value)
     }
    }
  return(
      <div className="col-md-4">
      <form onSubmit={handleSubmit}>
          <div className="row">
              <div className="col-md-12">
          <h1>Add Movie</h1> 
          <div className="form-group">
                  <input type="text" name='movie' value={movieName} placeholder="Enter movie name" className="form-control" onChange={handleChange}/>
          </div>
          <div className="form-group">
                  <input type="text" name='rank' placeholder="IMDB ranking" className="form-control" value={rankValue} onChange={handleChange}/>
          </div>
          <div className="form-group">
                  <button className="btn btn-primary">Add</button>
          </div>
          </div>
          </div>
      </form>
         <div className="row mt-5">
            <MovieStats/>
         </div>
      </div>
  )

  }

export default MovieForm