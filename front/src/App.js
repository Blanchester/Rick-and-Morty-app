import "./App.css"
import Cards from './components/cards/Cards'
import NavBar from './components/navbar/navbar'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from "./components/Detail/Detail"
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App () {
  const navigate = useNavigate()
  const location = useLocation()
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "gabriel.blanche91@gmail.com";
  const password = "123asd";

  const login = (userData) =>{
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(()=>{
    !access && navigate("/")
  },[access, navigate])

  const onSearch = (character) => {

    // if(characters.find(char=>char.id === character)){
    //   return alert("Personaje repetido")
    // } 

    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            //setCharacters((oldChars) => [...oldChars, data]);
            setCharacters([...characters, data]);
         } else {
            alert('Algo salió mal');
         }
      });
  }

  const onClose = (id) =>{
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className="schemaPage">
      {location.pathname === "/" ?
       <div className="schemaLogin">
        <Form login={login}/> 
       </div>
      : <NavBar onSearch={onSearch} />}
      <div className="schemaContainer">
        <Routes>
          <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:detailId' element={<Detail />} /> 
          <Route path='/favorites' element={<Favorites/>} />
        </Routes>
      </div>
      {location.pathname === "/" ? <></> : <footer>Footer</footer>}
    </div>
  )
}

export default App
