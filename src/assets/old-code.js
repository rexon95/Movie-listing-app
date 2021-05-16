import react from 'react'
import sampleimg from '../assets/sample.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const MovieCard = (props) => {
       const {list, handleDelete} = props

    return(
            <div className='col-md-4 mt-3'>
           <div className="card">
                <img className="card-img-top" src={sampleimg} />

                <div className="card-body">
                      <p><b>Movie : </b>{list.name}</p>
                      <p><b>Rank : </b>#{list.rank}</p>
                      <FontAwesomeIcon icon={faTrash} className="text-danger" onClick={() =>{handleDelete(list.id)}}/>
                </div>
            </div>
            </div>
    )
}

export default MovieCard


import React from 'react'
import MovieCard from '../components/MovieCard'
import {useDispatch, useSelector} from 'react-redux'
import { deleteMovie } from '../Actions/Actions'
import {addFilter} from '../Actions/Actions'
import {useState} from 'react'



const MovieList = (props) =>{
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
     const list = useSelector((state)=>{
         return state.movies
     })

     const statedata = [...list]
 
     const handleDelete = (id) => {
       const updatedList = list.filter(d=>{
             return d.id !== id
         })
        dispatch(deleteMovie(updatedList))
     }
     const handleSort = (e) => {
         if(e.target.value === 'name'){
             const sortNameArray = list.sort(function(a, b){
                const nameA=a.name.toLowerCase()
                const nameB=b.name.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
    
         }else if(e.target.value === 'rank'){
            const sortRankArray = list.sort(function(a, b){
                return a.rank-b.rank
            })

         }
     }
      const handleFilter = (e) =>{
          setSearch(e.target.value)
         const filterlist = statedata.filter(ele=>{
             return ele.name.includes(e.target.value)
         })
         console.log('filter',filterlist)
      }
   
    return(
        <div className="col-md-8 mt-2"> 
            <div className="row">
                <div className="col-md-9">
                  <input type= 'text'  value={search}  className="form-control" placeholder="Search by name..." onChange={handleFilter}/>
                  </div>
                  <div className="col-md-3">
            <select id='order' className="form-control" onChange={handleSort}>
                <option value="">Order by</option>
                <option value='name'>Sort by name</option>
                <option value='rank'>Sort by rank</option>
            </select>
            </div>
            </div>
            <div className="row">
                  {list.length !== 0 && list.map(ele=>{
                      return <MovieCard key={ele.id} list={ele} handleDelete={handleDelete}/>
                  })}
            </div>
        </div>
    )
}

export default MovieList


import React from 'react'
import MovieCard from '../components/MovieCard'
import {useDispatch, useSelector} from 'react-redux'
import { deleteMovie } from '../Actions/Actions'
import {useState} from 'react'



const MovieList = (props) =>{
    const dispatch = useDispatch()
     const list = useSelector((state)=>{
         return state.movies
     })
     const [flist,setFlist] = useState([])
     const [showFlist, setShowFlist] = useState(false)
 
     const handleDelete = (id) => {
       const updatedList = list.filter(d=>{
             return d.id !== id
         })
        dispatch(deleteMovie(updatedList))
        setShowFlist(false)
        
     }
     const handleSort = (e) => {
         if(e.target.value === 'name'){
             const sortNameArray = list.sort(function(a, b){
                const nameA=a.name.toLowerCase()
                const nameB=b.name.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
         }else if(e.target.value === 'rank'){
            const sortRankArray = list.sort(function(a, b){
                return a.rank-b.rank
            })
          
         }
     }
      const handleFilter = (e) =>{
          if(e.target.value === ""){
               setShowFlist(false)
          }else{
         const filterlist = list.filter(ele=>{
             return ele.name.includes(e.target.value)
         })
         console.log('filter',filterlist)
         setFlist(filterlist)
         setShowFlist(true)
        }

      }
     
    return(
        <div className="col-md-8 mt-2"> 
            <div className="row">
                <div className="col-md-9">
                  <input type= 'text'   className="form-control" placeholder="Search by name..." onChange={handleFilter}/>
                  </div>
                  <div className="col-md-3">
            <select id='order' className="form-control" onChange={handleSort}>
                <option value="">Order by</option>
                <option value='name'>Sort by name</option>
                <option value='rank'>Sort by rank</option>
            </select>
            </div>
            </div>
            <div className="row">
                  {!showFlist && list.length !== 0 && list.map(ele=>{
                      return <MovieCard key={ele.id} list={ele} handleDelete={handleDelete}/>
                  })}
                  {showFlist && flist.length !== 0 && flist.map(ele=>{
                      return <MovieCard key={ele.id} list={ele} handleDelete={handleDelete}/>
                  })}
            </div>
        </div>
    )
}

export default MovieList