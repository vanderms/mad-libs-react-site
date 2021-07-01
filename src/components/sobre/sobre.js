import Icon from '../icon/icon';


export default function Sobre(){ 

  return(
    <>      
      <section className='sobre-section'>          
        <h2>SOBRE MIM</h2>
        <div className="text-container">
          <p>Olá, meu nome é Vander Santos. Eu sou programador e web designer. Moro em São Paulo.</p>
          <p>Este site é um exemplo simples de um aplicativo web. Na sua construção, eu usei Adobe XD para criar o design, e, quanto ao desenvolvimento frontend, foram usados, principalmente, ReactJs e SASS.</p>
        </div>
        <div className="contato-container">
          <h3>CONTATO</h3>
          <a href="mailto:vanderms.84@gmail.com">
            <Icon type='mail'/>
            <span>vanderms.84@gmail.com</span>
          </a>
          <a href="https://github.com/vanderms" target="_blank" rel="noopener noreferrer">
            <Icon type='github'/>
            <span>https://github.com/vanderms</span>
          </a>
        </div>
      </section>
    </>
  );
}