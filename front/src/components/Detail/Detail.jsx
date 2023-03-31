import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});
//USE EFFECT SIMULA LOS CICLOS DE VIDA
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
        window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [detailId]);

    return(
        <div>
            <h1>Nombre: {character.name}</h1>
            <p>Status: {character.status}</p>
            <p>Specie: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin?.name}</p>
            <img src={character.image} alt={character.name} />
        </div>
    )
};

export default Detail;