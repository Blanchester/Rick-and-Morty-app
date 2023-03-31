import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";


const Favorites = () =>{
    const {myFavorites} = useSelector(state => state)
    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value="Order" disabled="disable">Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                <option value="Filter" disabled="disable">Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>
        {
            myFavorites.map((character) => {
                return (
                    <div>
                        <Link to={`/detail/${character.id}`}>
                        <h2>{character.name}</h2>
                        </Link>
                        <h2>{character.species}</h2>
                        <h2>{character.gender}</h2>
                        <img  src={character.image} alt={character.name} />
                    </div>
                    )
                })
            }
        </div>
        
    )

}

export default Favorites;