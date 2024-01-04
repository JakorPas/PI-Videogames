const { searchVgByName, getAllVg, getVgById, createGame, getAllGenres} = require ("../controllers/videogamesController")

const getVgHandler =  async (req, res) => {
    const {name} = req.query;
    const results = name ? await searchVgByName(name) : await getAllVg();
    res.status (200).send(results);
};

const getVgByIdHandler =  async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const Vg = await getVgById (id, source);
        res.status (200).json(Vg);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


const postVgHandler  = async (req, res) => {
    try {
        const {name, description, platform, image, launchDate, rating } =req.body;
        const newGame = await createGame (name, description, platform, image, launchDate, rating )
        res.status (201).json(newGame)
    } catch (error) {
        res.stats (400).json({error: error.message});
    }
};


const getVgGenreHandler =  async (req, res) => {
    try {
        const allGenres = await getAllGenres();
        res.status (200).json(allGenres);
    } catch(error) {
        res.status(500).json ({error: error.message})
    }
};

module.exports = {
    getVgHandler,
    getVgByIdHandler,
    postVgHandler,
    getVgGenreHandler
}