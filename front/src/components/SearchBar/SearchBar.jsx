import { useState } from "react";

function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("")//se le pone que tipo de dato es entre parentesis

   const handleChange = (event) =>{
      setCharacter(event.target.value)
   }

   return (
      <div>
         <input type='search' value={character} onChange={handleChange} />
         <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}

export default SearchBar;
