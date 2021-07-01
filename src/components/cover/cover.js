import ImageSrc from '../../assets/celebration.svg';
import { Link } from 'react-router-dom'; 



export default function Cover(){
  return(
    <section className="cover-section">
      <h1>MADLIBS</h1>
      <div className="text-container">
        <p>Mad Libs é um jogo de palavras criado por Leonard Stern e Roger Price, em 1953, nos Estados Unidos.</p>
        <p>O jogo consiste em histórias curtas, contendo alguns espaços em branco representando categorias específicas, como 'verbo', 'substativo', 'lugar', 'parte do corpo', etc. </p>
        <p>Durante o jogo, um jogador pede para o outro dizer  palavras para preencher os espaços em branco, revelando apenas a que categoria cada palavra pertence. </p>
        <p>Ao final, o texto é lido em voz alta. O resultado é muitas vezes uma história cômica e sem pé nem cabeça.</p>
        <div className="cta-container">
          <Link className='cta' to='jogo'>
            JOGAR
          </Link>
        </div>       
      </div>
      <img className='image' src={ImageSrc} alt="duas mulheres brincando com balões" />
    </section>
  );
}