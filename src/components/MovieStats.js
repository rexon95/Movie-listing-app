import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'

const MovieStats = (props) => {
    const [toprank, setToprank] =useState('')
      const Total = useSelector((state) => {
          return state.movies
      })
      useEffect(()=>{
           const arr = [...Total]
          if(Total.length !== 0){
             const sortedArray = arr.sort(function(a, b){
                return a.rank-b.rank
            })
            setToprank(sortedArray[0].name)
        }else{
            setToprank('')
        }
      },[Total])

    return(
        <div className="col-md-12">
        <div className="card">
                <div className="card-body">
                        <h3>Movie Stats</h3>
                        <h5 className="card-title">Total Movies - {Total.length}</h5>
                        <h5>#Top ranked Movie - {toprank}</h5>
                </div>
        </div>
        </div>
    )
}

export default MovieStats