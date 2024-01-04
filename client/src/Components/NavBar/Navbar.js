import style from "./Navbar.module.css"
import { useNavigate } from "react-router-dom"
import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import {useDispatch} from "react-redux"
import {getVgByName} from "../../Redux/actions"

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = async (search) => {
        try {
            const Vg = await dispatch(getVgByName(search))
            if (Vg) {
                console.log(Vg)
                navigate(`/detail/${Vg[0].name}`)
            } else {
                console.error("No se encontro un Videojuego con ese nombre", Vg);
            };
        } catch (error) {
            console.error("Error al buscar el Videojuego", error)
        }
    };

    return (
        <div className={style.mainContainer}>
            <img className= {style.img2} src ="https://i.pinimg.com/736x/17/93/7c/17937c5624135c85cae6f10f58e2f496.jpg" alt =""/>
            <SearchBar onSearch ={handleSearch}/>
            <button className={style.buttonForm} onClick={()=> navigate('/form')}>Crear jogo</button>
            <button className={style.buttonHome} onClick={() => navigate('/home')}>JOM</button>
        </div>
    )
}


export default Navbar