( () => {
  let headerContainer = document.querySelector( 'header' );
  window.onscroll = () => {
    if ( window.pageYOffset > 0 ) {
      headerContainer.classList.add( 'sticky' );
    } else {
      headerContainer.classList.remove( 'sticky' );
    }
  }
} )();