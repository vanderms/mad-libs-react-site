

export function Logo(){
  return(
    <div className="logo-component">
      <span>V</span>
      <span>S</span>
    </div>
  );
}


export function BackDrop({className, onClick}){
  return (
    <div 
      className={`backdrop-component ${className ? className : ''}`} 
      onClick = { onClick }  
    ></div>
  );
}

