import Layout from './components/layout/layout';
import Cover from './components/cover/cover';
import Sobre from './components/sobre/sobre';
import Jogo from './components/jogo/jogo';
import Historia from './components/historia/historia';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";


function App() {

  const [story, setStory] = useState([]);
  const [buckets, setBuckets] = useState(['']);
  const [title, setTitle] = useState('');
  const [userWords, setUserWords] = useState([]);
  const location = useLocation();

  function addUserWord(word){
    setUserWords([...userWords, word]);    
  }

  function resetWords(){
    setUserWords([]);
  }

  useEffect(()=>{
    fetch('/mad-libs-react-site/story.json')
      .then(response =>response.json())
      .then(data => {
        setStory(data.historia);
        setBuckets(data.palavras);
        setTitle(data.titulo);
      })
      .catch(error=>{
        console.log(error);
      })
  }, []);

  useEffect(()=>{
    if(location.pathname === '/jogo'){
      resetWords();
    }
  }, [location]);

  return (
    <Layout>  
      <Switch>
        <Route exact path='/'>
          <Cover/>
        </Route>
        <Route path='/sobre'>
          <Sobre/>
        </Route>
        <Route path='/jogo'>
          <Jogo 
            buckets={ buckets }
            addUserWord={ addUserWord }  
          />
        </Route>
        <Route path='/historia'>
          <Historia
            title={title}
            story={story}
            words={userWords}
          />
        </Route>
      </Switch>
    </Layout>   
  );
}

export default App;
