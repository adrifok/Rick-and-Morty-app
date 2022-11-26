import Card from './Cards'
import React from 'react';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div  style= {{
      display: 'flex', justifyContent: 'space-evenly'
   }}>
      {characters.map(character => (
      <Card 
      detailId={character.id}
      key={character.name}
      name={character.name} 
      gender={character.gender}
      species={character.species}
      image={character.image}
      onClose={character.onClose}
   
     // {...character}  //en lugar del codigo anterior hago destructuring 
      //para resumir, desgloso el objeto

       //onClose ={() => window.alert('Emulamos que se cierra la card')}
      />
      ))}
   </div>
   );
}
 