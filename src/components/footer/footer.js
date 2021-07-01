import { Logo } from '../utilities/utilities'; 

export default function Footer(){
  
  const year = new Date().getFullYear();   
  let period = year.toString();
  if(year !== 2021){
    period = "2021 - " + period;
  }

  return(
    <footer className="footer-component">
      <Logo/>
      <small>© {period} - vanderms. Todos os direitos reservados.</small>
    </footer>
  );
}