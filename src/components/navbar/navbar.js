import './navbar.scss';
import { Link } from 'react-router-dom';
import { Logo, BackDrop } from '../utilities/utilities';
import  Icon  from '../icon/icon';
import { useState } from 'react';


export default function Navbar(){

  const [ closed, setClosed ] = useState(true);

  const openSidebar = ()=> setClosed(false);
  const closeSidebar = ()=> setClosed(true);

  return(
    <>  
      <nav className={'navbar-component ' + (closed ? 'closed' : '')}>
        <span onClick={closeSidebar} className="close-btn" tabIndex='0'>
          <Icon type='close'/>
        </span>
        <Link to='/' replace><Logo/></Link>           
        <div className="links">
          <Link to='/' replace>HOME</Link>
          <span className="sobre">SOBRE</span>
        </div>  
        <div className="cta">
          JOGAR
        </div>
      </nav>
      <div className="navbar-placeholder-component"></div>
      <div className={'sidebar-menu-component ' + (closed ? 'closed' : '')}>
        <span onClick={openSidebar} tabIndex='0' className="menu-btn">
          <Icon type='menu'/>
        </span>     
        <BackDrop className='backdrop' onClick={closeSidebar}/> 
      </div>
    </>
  );
}