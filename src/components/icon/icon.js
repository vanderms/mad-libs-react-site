

export default function Icon({ type }){

  switch(type){    
    case 'menu':
      return(
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20">
          <path id="Icon_material-menu" data-name="Icon material-menu" d="M4.5,29h30V25.667H4.5Zm0-8.333h30V17.333H4.5ZM4.5,9v3.333h30V9Z" transform="translate(-4.5 -9)" fill="#fff"/>
        </svg>
      );
    case 'close':
      return(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path id="Icon_material-close" data-name="Icon material-close" d="M27.5,9.514,25.486,7.5,17.5,15.486,9.514,7.5,7.5,9.514,15.486,17.5,7.5,25.486,9.514,27.5,17.5,19.514,25.486,27.5,27.5,25.486,19.514,17.5Z" transform="translate(-7.5 -7.5)" fill="#fff"/>
        </svg>
      );
    case 'mail':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="18" viewBox="0 0 22.5 18">
          <path id="Icon_material-mail" data-name="Icon material-mail" d="M23.25,6h-18A2.247,2.247,0,0,0,3.011,8.25L3,21.75A2.257,2.257,0,0,0,5.25,24h18a2.257,2.257,0,0,0,2.25-2.25V8.25A2.257,2.257,0,0,0,23.25,6Zm0,4.5-9,5.625-9-5.625V8.25l9,5.625,9-5.625Z" transform="translate(-3 -6)" fill="#000"/>
        </svg>
      );
    case 'github':
      return(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path id="Icon_awesome-github-square" data-name="Icon awesome-github-square" d="M16.071,2.25H1.929A1.929,1.929,0,0,0,0,4.179V18.321A1.929,1.929,0,0,0,1.929,20.25H16.071A1.929,1.929,0,0,0,18,18.321V4.179A1.929,1.929,0,0,0,16.071,2.25Zm-4.93,15.417c-.338.06-.462-.149-.462-.321,0-.217.008-1.326.008-2.222a1.565,1.565,0,0,0-.454-1.233c1.487-.165,3.054-.37,3.054-2.937A2.063,2.063,0,0,0,12.6,9.386a2.513,2.513,0,0,0-.068-1.808C11.973,7.4,10.7,8.3,10.7,8.3a6.321,6.321,0,0,0-3.343,0S6.075,7.4,5.517,7.578a2.493,2.493,0,0,0-.068,1.808,2.018,2.018,0,0,0-.627,1.567c0,2.555,1.5,2.772,2.985,2.937a1.456,1.456,0,0,0-.426.9,1.41,1.41,0,0,1-1.941-.558,1.4,1.4,0,0,0-1.025-.687c-.651-.008-.044.41-.044.41.434.2.739.972.739.972.39,1.193,2.254.792,2.254.792,0,.558.008,1.467.008,1.631s-.121.382-.462.321A6.666,6.666,0,0,1,2.4,11.306,6.376,6.376,0,0,1,8.912,4.817a6.519,6.519,0,0,1,6.678,6.489A6.6,6.6,0,0,1,11.142,17.667ZM7.2,15.212c-.076.016-.149-.016-.157-.068s.044-.113.121-.129.149.024.157.076S7.28,15.2,7.2,15.212Zm-.382-.036c0,.052-.06.1-.141.1s-.149-.036-.149-.1.06-.1.141-.1S6.818,15.115,6.818,15.175Zm-.55-.044c-.016.052-.1.076-.165.052s-.129-.076-.113-.129.1-.076.165-.06S6.288,15.079,6.268,15.131Zm-.494-.217c-.036.044-.112.036-.173-.024s-.076-.129-.036-.165.113-.036.173.024S5.81,14.882,5.774,14.914Zm-.366-.366c-.036.024-.1,0-.149-.06s-.044-.129,0-.157.112-.008.149.052a.118.118,0,0,1,0,.165Zm-.261-.39c-.036.036-.1.016-.141-.024s-.052-.113-.016-.141.1-.016.141.024S5.183,14.131,5.147,14.159Zm-.269-.3a.076.076,0,0,1-.112.016c-.052-.024-.076-.068-.06-.1a.1.1,0,0,1,.113-.016C4.87,13.785,4.894,13.829,4.878,13.862Z" transform="translate(0 -2.25)" fill="#000"/>
        </svg>
      );
    default:
      throw Error('invalid icon type');
  }
}
