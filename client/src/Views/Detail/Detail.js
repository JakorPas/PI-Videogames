import style from './Detail.module.css'
import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import Navbar from "../../Components/NavBar/Navbar"
import { useDispatch } from 'react-redux';
import { getVgByName } from '../../Redux/actions';




  

 

export default function Detail(){
    const {name} = useParams();
    console.log (name)
    const dispatch = useDispatch()
    const [Vg, setVg] = useState({});
    useEffect(() => {
        async function fetchVg(){
            const response = await dispatch(getVgByName(name))
            console.log(response);
            setVg(response)
        }
        fetchVg()
    }, [name, dispatch]);


    const genres = []
    if (Vg[0]) {
    
     Vg[0].genres.map((e) => {
         genres.push(e.name)
     })
    }
  
    return(
        <div className={style.container}>
            <Navbar/>
            <div className={style.tarjeta}>
                <div className={style.info}>
                    {Vg && Vg.length > 0 && Vg[0].name && (<h1>{Vg[0].id}. {Vg[0].name}</h1>)}
                    {Vg && Vg.length > 0 && Vg[0].genres && (<p><b>Generos: </b>{genres + " "}</p>)}
                </div>
                <div>
               {Vg && Vg.length > 0 &&
                    <img className={style.imgDetail} src={Vg[0].image} alt={Vg[0].name}/>}
                </div>
                
            </div>
        </div>
        
    )
}