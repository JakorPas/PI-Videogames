import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterComponent from "../../Components/Filter/filter";
import { filterVgBySource, filterVgByG, getVg } from "../../Redux/actions";
import { sortGames, SortingOptions} from "../../Components/Sorting/sorting";
import style from "./home.module.css"
import NavBar from "../../Components/NavBar/Navbar"
import CardContainer from "../../Components/CardContainer/cardContainer";



const Home = () => {

    const dispatch = useDispatch();
    const filteredGames = useSelector((state) => state.filteredVideogames) || [];
    const [ selectedGenre, setSelectedGenre ] = useState("");
    const [ selectedSource, setSelectedSource ] = useState("");
    const [ sortOrder, setSortOrder ] = useState("name");
    const [ sortDirection, setSortDirection ] = useState("asc");
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        dispatch(getVg(9, 0))
    }, [dispatch])

    // const HandleFilterByGenre = (genre, source) => {
    //     setSelectedGenre(genre);
    //     dispatch(filterVgByG(genre));
    //     const filtered = useSelector((state) => state.filteredGames);
    //     setSelectedSource(source);
    //     dispatch(filterVgBySource(source, filtered));
    // } 


   
const useFilteredGames = () => {
    return useSelector((state) => state.filteredGames);
  };
  

  const HandleFilterByGenre = (genre, source) => {
    setSelectedGenre(genre);
    dispatch(filterVgByG(genre));
    
    const filtered = useFilteredGames(); 
    
    setSelectedSource(source);
    dispatch(filterVgBySource(source, filtered));
  };





    const handleSortChange = (field, value) => {
        if (field === "order") {
            setSortOrder(value);
        } else if (field === "direction") {
            setSortDirection(value);
        }
    }

    const handleNextClick = () => {
        const newOffset = offset + 9;
        setOffset(newOffset)
    }
    
    const handlePrevClick = () => {
        const newOffset = offset - 9;
        setOffset(newOffset)
    }
    const sortedGames = sortGames(filteredGames, sortOrder, sortDirection)   
    const paginateGames = sortedGames.slice(offset, 9+parseInt(offset))




    return(
        <div className={style.container}>
            <NavBar/>
            <FilterComponent selectedGenre={selectedGenre} selectedSource={selectedSource} onFilterByGenre={HandleFilterByGenre} />
            <SortingOptions sortOrder={sortOrder} sortDirection={sortDirection} onSortChange={handleSortChange}/>
            <div className={style.prevNext}>
                { offset>=9 && <button className={style.buttonP} onClick={handlePrevClick}> {"<<<"} </button>}
                { offset<=91 && <button className={style.buttonN} onClick={handleNextClick}> {">>>"} </button>}
            </div>
            <CardContainer videogames={paginateGames}/>
        </div>
    )
}

export default Home