import React, { useEffect, useState } from "react";
import { getAllGenres } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";


const FilterComponent = ({ selectedGenre, onFilterByGenre }) => {
    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.arr);
    const [source, setSource] = useState("")

    const handleGenreChange = (event) => {
    const selectedValue = event.target.value;
    onFilterByGenre(selectedValue);
  };

    const handleSourceChange = (event) => {
    const selectedSource = event.target.value;
    setSource(selectedSource);
    };


useEffect(() => {
  dispatch(getAllGenres());
}, [dispatch]);
  return (
    <div>
        <label>Filtrar por genero:</label>
        <select value={selectedGenre} onChange={handleGenreChange}>
            <option value="">Todos</option>
            {allGenres && allGenres.map((option, index) => (<option key={index} value={option}>
            {option}
            </option>
        ))}
        </select>
        <div>
        <label>Fuente de datos:</label>
        <select value={source} onChange={handleSourceChange}>
          <option value="">Todos</option>
          <option value="local">Juegos Locales</option>
          <option value="api">Juegos API</option>
        </select>
      </div>
    </div>
  )
}

export default FilterComponent
