import { Link } from 'react-router-dom';

function escape(string) {
  const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
  };
  const reg = /[&<>"'/]/ig;
  return string.replace(reg, (match)=>(map[match]));
}


export default function Historia({ title, story, words, reset }){
   
  return(
    <section className="historia-section">
      <h3>{ title }</h3>
      <div className="text-container">
      {
        story.map((paragraph, index) =>{
          for(let i = 0; i < words.length; i++){
            paragraph = paragraph.replaceAll(`{${i}}`, `<span>${escape(words[i])}</span>`);
          }
          function markup(){
            return {__html: paragraph};
          }
          return <p key={index} dangerouslySetInnerHTML={markup()}></p>
        })
      }
      </div>      
      <Link className='cta-primary' to='/jogo'>JOGAR DE NOVO</Link>      
    </section>
  );
}