import Card from '../card/Card';
import style from "./cards.module.css"

function Cards({characters, onClose}) {
   
   return( 
   <div className={style.homeSchema}>
      {
         characters.map(({id, species, gender, name, image}) =>{
            return <Card
            name= {name}
            species= {species}
            gender= {gender}
            image= {image}
            onClose={() => onClose(id)}
            key= {id}
            id={id}
            />
         })
      }
   </div>
   );
}


export default Cards;