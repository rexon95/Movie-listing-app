const intState = [] 
const movieReducer = (state=intState,action) =>{
       switch(action.type) {
        case 'ADD_MOVIE' : {
            return [{...action.payload}, ...state]
        }
        case 'REMOVE_MOVIE' : {
            return [...action.payload]
        }
        default : {
            return state
        }
       }
}

const filterReducer = () =>{


    
}

export default movieReducer