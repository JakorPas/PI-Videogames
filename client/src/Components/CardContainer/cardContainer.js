import style from "./cardContainer.module.css"
import Card from "../Card/Card"
import React from "react";

const CardContainer = ( {videogames} ) => {
        return (
            <div className={style.container}>
            {videogames?.map((Vg, i) => {
                return (
                    <Card 
                        key={i}
                        image={Vg.image}
                        name={Vg.name}
                        genres={Vg.genres}
                    />
                );
            })}
        </div>
        );
};

export default CardContainer;