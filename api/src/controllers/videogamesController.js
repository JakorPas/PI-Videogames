const {Genre, Videogame} = require ("../db")
const axios = require ("axios")
const {
    API_KEY
  } = process.env;




const searchVgByName = async (slug) => {
    const apiVideogame = await axios.get(`https://api.rawg.io/api/games?search=${slug}&key=a6b1b9602b95480aa46e8267798daef5`)
    const results = clean( apiVideogame.data.results);
   const filteredVg = results.filter((e) => e.name === slug)
   console.log(filteredVg)
   return filteredVg
 }


const getAllVg = async ( ) => {
    const dataBaseVg = await Videogame.findAll ();
    const apiVideogameRaw = await axios.get (`https://api.rawg.io/api/games?key=a6b1b9602b95480aa46e8267798daef5&limit=100`)
    const apiVideogame = clean(apiVideogameRaw.data.results);
    return [...dataBaseVg, ...apiVideogame];
}

const getVgById = async (id, source) =>{
    const Vg = 
        source === "api"
            ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=a6b1b9602b95480aa46e8267798daef5`))
            : await Videogame.findByPk(id);
        return Vg    
}

const createGame = async (name, description, platform, image, launchDate, rating) => {
    await Videogame.create ({name, description, platform, image, launchDate, rating})
}

const getAllGenres = async () => {
    const allGenres = await axios.get (`https://api.rawg.io/api/genres?key=a6b1b9602b95480aa46e8267798daef5`)
    const auxiliar = allGenres.data.results
    console.log(auxiliar)
    return auxiliar
}


const clean = (arr) => 
    arr.map((elem) => {
        return {
            id: elem.id,
            name: elem.name,
            description: elem.description,
            image: elem.background_image,
            platforms: elem.platforms,
            released: elem.released,
            description:elem.description,
            genres: elem.genres,
            rating: elem.rating,
            slug:elem.slug,
            source: "api"
        }
    })






module.exports = {
    searchVgByName, 
    getAllVg,
    getVgById,
     createGame,
     getAllGenres
}