import axios from "axios"

export const GET_VIDEOGAMES = "GET_VIDEOGAMES"
export const GET_VIDEOGAMES_BY_NAME = "GET_VIDEOGAMES_BY_NAME"
export const GET_VIDEOGAMES_BY_ID = "GET_VIDEOGAMES_BY_ID"
export const FILTER_VIDEOGAMES_BY_GENRE = "FILTER_VIDEOGAMES_BY_GENRE"
export const GET_ALL_GENRES = "GET_ALL_GENRES"
export const FILTER_VIDEOGAMES_BY_SOURCE = "FILTER_VIDEOGAMES_BY_SOURCE"

export const getVg = (limit, offset) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/videogames?limit=${limit}&offset=${offset}`)
            const VgData = response.data
        dispatch({
            type: GET_VIDEOGAMES,
            payload: VgData
        })

        } catch(error){
            console.error("Error al obtener los videojuegos", error)
        }
    }
}

export const getVgByName = (slug) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/videogames?name=${slug}`)
            const videogame = response.data;
            dispatch({
                type:GET_VIDEOGAMES_BY_NAME,
                payload: videogame,
            })
            return videogame;
        } catch (error) {
            console.error("Error al obtener el videojuego", error)
        }
    }
}

export const filterVgByG = (genre) => {
    return function (dispatch, getState) {
        try {
            const state = getState();
            let filteredVideogames = [];
            if (genre === "") {
                filteredVideogames = state.videogames;
            } else {
                filteredVideogames = state.videogames.filter((videogame) => {
                    const VgGenre = videogame.genres
                    console.log(VgGenre);
                    if (!VgGenre) {
                        return false;
                    }
                    return videogame.genres.includes(genre)})
            }                
            dispatch({
                type:FILTER_VIDEOGAMES_BY_GENRE,
                payload: filteredVideogames,
                })
            return filteredVideogames;
        } catch (error) {
            console.error("Error al filtrar por genero", error)
        }
    }
}

export const filterVgBySource = (source, videogamesArray) => {
    return function (dispatch) {
        try {
            let filteredVideogames = [];
            if (source === "") {
                filteredVideogames = videogamesArray;
            } else {
                filteredVideogames = videogamesArray.filter((videogames) => {
                    if (videogames.source === source) {
                        return true;
                    } else {
                        return false;
                    }
                    
                })
            }
            dispatch({
                type:FILTER_VIDEOGAMES_BY_SOURCE,
                payload: filteredVideogames
            })
            return filteredVideogames
        } catch (error) {
            console.error("Error al filtrar por fuente de datos", error)
        }
    }
}

export const getVgById = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/videogames/${id}`)
            const VgById = response.data
            dispatch({
                type: GET_VIDEOGAMES_BY_ID,
                payload: VgById
            })
        } catch (error) {
            console.error("Error al obtener el corredor", error)
        }
    }
}


export const getAllGenres = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/genres")
            const genres = response.data
            const arr = []
            genres.map((e) => {
                arr.push(e.name)
            })
            dispatch({
                type: GET_ALL_GENRES,
                payload: arr
            })
            return arr
        } catch (error) {
            console.error("Error al enlistar los generos", error)
        }
    }
}