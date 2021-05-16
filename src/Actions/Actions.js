export const addMovie = (movie) => {
    return {
        type : 'ADD_MOVIE',
        payload : movie
    }
}

export const deleteMovie = (data) => {
    return {
        type : 'REMOVE_MOVIE',
        payload : data
    }
}
