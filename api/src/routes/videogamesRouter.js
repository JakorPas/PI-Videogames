const { Router } = require ("express")
const {getVgHandler, getVgByIdHandler, postVgHandler, getVgGenreHandler} = require ("../handlers/handlers")

const videogamesRouter = Router ( );

videogamesRouter.get ("/videogames", getVgHandler);
videogamesRouter.get ("/videogames/:idVideogames", getVgByIdHandler);
videogamesRouter.post ("/videogames", postVgHandler);
videogamesRouter.get ("/genres", getVgGenreHandler);

module.exports = videogamesRouter

