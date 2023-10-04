//funsion del buscador 
// ObtÃ©n referencias a elementos HTML
const searchInput = document.getElementById("searchInput");
const searchItems = document.querySelectorAll(".search-item");

// Agrega un evento de escucha al campo de bÃºsqueda
searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    
    // Itera a travÃ©s de los elementos de la lista
    searchItems.forEach(item => {
        const link = item.querySelector("a");
        const itemText = link.textContent.toLowerCase();
        
        // Comprueba si el tÃ©rmino de bÃºsqueda estÃ¡ contenido en el texto del elemento
        if (itemText.includes(searchTerm)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

//funsion de link copiador de link
// ObtÃ©n una referencia al enlace
const copyLinkButton = document.getElementById("copyLink");

// Agrega un evento de clic al enlace
copyLinkButton.addEventListener("click", function (event) {
    // Evita que el enlace redirija a una nueva pÃ¡gina
    event.preventDefault();

    // Obtiene la URL actual de la pÃ¡gina
    const currentURL = window.location.href;

    // Crea un elemento de entrada de texto oculto para copiar el enlace
    const tempInput = document.createElement("input");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-1000px";
    tempInput.value = currentURL;
    
    // Agrega el elemento al documento
    document.body.appendChild(tempInput);

    // Selecciona el contenido del elemento de entrada de texto
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos mÃ³viles

    // Intenta copiar el contenido seleccionado al portapapeles
    document.execCommand("copy");

    // Elimina el elemento de entrada de texto temporal
    document.body.removeChild(tempInput);

    // Cambia el texto del enlace para indicar que se copiÃ³
    copyLinkButton.textContent = "Enlace Copiado";

    // Restaura el texto del enlace despuÃ©s de unos segundos
    setTimeout(function () {
        copyLinkButton.textContent = "Copiar Enlace";
    }, 2000); // Cambia el texto de vuelta despuÃ©s de 2 segundos (opcional)
});


//funsion de boton para compartir 
// ObtÃ©n una referencia al enlace
const shareLinkButton = document.getElementById("shareLink");

// Agrega un evento de clic al enlace
shareLinkButton.addEventListener("click", function (event) {
    // Evita que el enlace redirija a una nueva pÃ¡gina
    event.preventDefault();

    // Verifica si el navegador admite la funciÃ³n de compartir
    if (navigator.share) {
        // Obtiene la URL actual de la pÃ¡gina
        const currentURL = window.location.href;

        // Crea un objeto de datos para compartir
        const shareData = {
            title: document.title,
            text: "Â¡Echa un vistazo a esta pÃ¡gina!",
            url: currentURL,
        };

        // Llama a la funciÃ³n de compartir del navegador
        navigator.share(shareData)
            .then(() => {
                console.log("PÃ¡gina compartida con Ã©xito");
            })
            .catch((error) => {
                console.error("Error al compartir la pÃ¡gina:", error);
            });
    } else {
        // Si el navegador no admite la funciÃ³n de compartir, proporciona una alternativa
        alert("Tu navegador no admite la funciÃ³n de compartir.");
    }
});
