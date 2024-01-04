
import { GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAMES_BY_ID, FILTER_VIDEOGAMES_BY_GENRE, GET_ALL_GENRES, FILTER_VIDEOGAMES_BY_SOURCE } from "./actions"

const initialState = {
    videogames: [],
    slectedVideogame: null,
    filteredVideogames: [],
    genres: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return { ...state, VgData: [...action.payload], filteredVideogames: [...action.payload] };
        case GET_VIDEOGAMES_BY_NAME:
            return { ...state, videogame: action.payload };
        case FILTER_VIDEOGAMES_BY_GENRE:
            return { ...state, filteredVideogames: action.payload };
        case FILTER_VIDEOGAMES_BY_SOURCE:
            return { ...state, filteredVideogames: action.payload };
        case GET_VIDEOGAMES_BY_ID:
            return { ...state, getVgById: action.payload };
        case GET_ALL_GENRES:
            return {...state, arr: action.payload}
        default:
            return { ...state }
    }
}

export default rootReducer;

