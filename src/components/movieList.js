import React from 'react'
import MovieCard from '../components/MovieCard'
import {useDispatch, useSelector} from 'react-redux'
import { deleteMovie } from '../Actions/Actions'
import {useState,useEffect} from 'react'



const MovieList = (props) =>{
    const dispatch = useDispatch()
     const list = useSelector((state)=>{
         return state.movies
     })
     const [movies,setMovies] = useState([])
     const [search,setSearch] = useState('')

       useEffect(()=>{
           setMovies(list)
       },[list])
  
      const handleFilter = (e) =>{
          setSearch(e.target.value)
         const filterlist = list.filter(ele=>{
             return ele.name.includes(e.target.value)
         })
         setMovies(filterlist)
         console.log('filter',filterlist)
      }

      const handleDelete = (id) =>{
          const updatedList = list.filter((ele=>{
              return id !== ele.id
          }))
          dispatch(deleteMovie(updatedList))
          setSearch('')
      }

        
     const handleSort = (e) => {
         if(e.target.value === ""){
            setMovies(list)
         }
        else if(e.target.value === 'name'){
            const arr = [...list]
            const sortNameArray = arr.sort(function(a, b){
               const nameA=a.name.toLowerCase()
               const nameB=b.name.toLowerCase()
               if (nameA < nameB) //sort string ascending
                   return -1 
               if (nameA > nameB)
                   return 1
               return 0 //default return value (no sorting)
           })
           setMovies(sortNameArray)
        }else if(e.target.value === 'rank'){
            const arr = [...list]
           const sortRankArray = arr.sort(function(a, b){
               return a.rank-b.rank
           })
           setMovies(sortRankArray)
        }
    }
     
    return(
        <div className="col-md-8 mt-2"> 
            <div className="row">
                <div className="col-sm-9">
                  <input type= 'text'   className="form-control" placeholder="Search by name..." onChange={handleFilter} value={search} />
                  </div>
                  <div className="col-sm-3">
            <select id='order' className="form-control" onChange={handleSort}>
                <option value="">Order by</option>
                <option value='name'>Sort by name</option>
                <option value='rank'>Sort by rank</option>
            </select>
            </div>
            </div>
            <div className="row">
                  {movies.length !== 0 && movies.map(ele=>{
                      return <MovieCard key={ele.id} list={ele} handleDelete={handleDelete}/>
                  })}
            </div>
        </div>
    )
}

export default MovieList