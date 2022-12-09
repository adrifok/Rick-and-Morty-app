import React from 'react';
import { connect, useDispatch } from "react-redux";
import  Card  from "../Card/Card";
import { filterCards, orderCards } from '../redux/actions';

export function Favorites ({myFavorites}){
    //console.log(myFavorites)

    const dispatch = useDispatch();
    const handleClick = (e) =>{
        const {name, value} = e.target
        switch (name) {
            case 'order':
             return dispatch(orderCards(value))  
             case 'filter':
             return dispatch(filterCards(value)) 
        }
    }
        return(
        <div>
            <div>
                
                <select name='order' onClick={handleClick}>
                    <option value="Ascendente">Upward</option>
                    <option value="Descendente">Falling</option>
                </select>
                <select name ='filter' onClick={handleClick} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                </select>
            </div>
        {myFavorites.map((character, index) => (
         <Card  
        detailId={character.detailId}
        key={index}
        name={character.name} 
        species={character.species}
        gender={character.gender}
        image={character.image}
        />
        ))}
        </div>
    )
}
export function mapStateToProps(state){
    return{
        myFavorites : state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)