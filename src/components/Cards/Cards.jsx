import React from 'react';
import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div  style= {{
      display: 'flex', justifyContent: 'center'
   }}>
      {characters.map(character => (
      <Card 
      detailId={character.id}
      key={character.name}
      name={character.name} 
      gender={character.gender}
      species={character.species}
      image={character.image}
      onClose={() => props.onClose(character.id)} />
      //onClose={character.onClose}
   
      //{...character}  //en lugar del codigo anterior hago destructuring 
      //para resumir, desgloso el objeto

      //onClose ={() => window.alert('Emulamos que se cierra la card')}
      
      ))}
   </div>
   );
}
 