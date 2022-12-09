
import React from 'react';
import { useState , useEffect} from 'react';
import './App.css'
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar';
import { Routes, Route, useLocation , useNavigate} from 'react-router-dom';
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App () {
const [characters, setCharacters] = useState([]);

    function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
          } else {
              window.alert('Invalid Input ID');
          }
      });
};
const onClose = (id) =>{
  setCharacters(characters.filter((char) => char.id !== id));
};

const location = useLocation();  //location es un objeto que contiene el pathname (la url donde estoy parado)
console.log(location);

const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'yo@gmail.com';
const password = '123456';

function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
}

useEffect (() => {
  !access && navigate('/');
}, [access]);


  return (

    <div className='App' style={{ padding: '25px' }}> 
    {location.pathname !== "/" && <NavBar onSearch ={onSearch}/>}
      <Routes >
      <Route path="/" element ={<Form login = {login}/>}/> 
      <Route 
              path='/home' 
              element = {<Cards characters={characters} onClose= {onClose}/>}/>
      <Route path='/about' element={<About />} />
      <Route path='/Favorites' element={<Favorites />} />
      <Route path='/detail/:detailId' element={<Detail />}/>
      </Routes>
      
      </div>
  );
}

export default App;
