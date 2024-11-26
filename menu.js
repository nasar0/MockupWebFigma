document.addEventListener("DOMContentLoaded", () => {
    let menu =   document.querySelector("#menu");    
    let menus = document.querySelector("#menus");       // Selecciona el botón del menú
    let cerrar = document.querySelector("#equis");      // Selecciona la barra de navegación para el evento de cerrar

    

    
    menus.addEventListener("click", () => {      // Agrega un evento click al botón del menú
        menu.style.display = "flex";     // Oculta el botón del menú
    });

    
    cerrar.addEventListener("click", () => {        // Agrega un evento click a la barra de navegación para cerrarla
        menu.style.display = "none";        // Vuelve a mostrar el botón del menú
    });

    // cerrar.addEventListener("mouseleave", () => {          
    //     menu.style.display = "none";                 
    // });
});
