import React from 'react';
import {useState, useEffect} from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Detail(props){
    const {detailId} = useParams();
    const navigate= useNavigate();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else  {
                window.alert('invalid character ID');
            }
        })
        .catch((err) => {
        window.alert('invalid character ID');
        });
        return setCharacter({});
     }, [detailId]);
     
     console.log(character)
    return(
        <div className='sobreMi' >
            <Link to='/home'>
            </Link>
            <h1>Name{character.name}</h1>
            <img scr= {character.image} alt ={character.name}/>
            <h2>State: {character.status}</h2>
            <h2>Species:{character.species}</h2>
            <h2>Gender:{character.gender}</h2>
            <h2>Origin:{character.origin.name}</h2>
            <br/>
            <button className="goback" onClick={() => navigate("/cards")}>Go Back!</button>
        </div>
    )
}