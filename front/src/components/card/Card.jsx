import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import "./card.css"

export default function Card({id, name, species, gender, image, onClose}) {

   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id))

      }else{
         setIsFav(true);
         dispatch(addFavorite({id, name, species, gender, image, onClose}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div className="div1">
         <div className="titulo">
            <span>{name}</span>
         </div>
         
         <Link to={`/detail/${id}`}>
            <div className="divImg">
               <img className="img" src={image} alt={name} />
            </div>
         </Link>
         <div className="div2"> 
            <span>Specie:{species}</span>
            <span>Gender:{gender}</span>
         </div>
         <div className="divButtons">
               {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }

            <button onClick={onClose}>X</button>
         </div>
      </div>
   );
}
