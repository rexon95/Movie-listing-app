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
                       <div className="d-flex justify-content-end">
                      <FontAwesomeIcon icon={faTrash} className="text-danger" onClick={() =>{handleDelete(list.id)}}/>
                      </div>
                </div>
            </div>
            </div>
    )
}

export default MovieCard