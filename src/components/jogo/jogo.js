import {useState } from 'react';
import { useHistory } from "react-router-dom";



export default function Jogo({ buckets, addUserWord }){
 
  const history = useHistory();
  const [index, setIndex] = useState(0);  
  const [word, setWord] = useState('');
  const [ finished, setFinished ] = useState(false);


  function handleSubmit(e){
    e.preventDefault();
    if(!finished){
      addUserWord(`${word}`);
      setWord('');
      if((index + 1) < buckets.length){
        setIndex(index + 1);
      }
      else{
        setFinished(true);      
      }
    } else{
      history.push('/historia');
    }   
  }

  let labelText = `Escreva ${buckets[index]}`;
  if(finished){
    labelText = "Pronto, terminamos! Clique mais uma vez em 'próximo' para ler a linda história que escrevemos!";
  }

  return(
    <section className="jogo-section">
      <form onSubmit={handleSubmit}>
        <label htmlFor="palavra">{labelText}</label>
        {!finished && 
          <input value={word} onChange={(e)=> setWord(e.target.value)} type="text" name='palavra' id="palavra"  required/>
        }       
        <input type="submit" value="PRÓXIMO" />
      </form>
    </section>
  );
}