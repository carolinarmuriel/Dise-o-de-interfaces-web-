function cambiarIdioma(idioma) {
    const elementos = document.querySelectorAll("[id]");
    elementos.forEach(elemento => {
        const id = elemento.id;
        if (traducciones[idioma][id]) {
            elemento.textContent = traducciones[idioma][id];
        }
    });
}

const traducciones = {
    es: {
        titulo: "Contacto",
        subtitulo: "Contáctanos",
        descripcion: "Si tienes alguna consulta, no dudes en ponerte en contacto con nosotros:",
        "direccion-label": "Dirección:",
        direccion: "Plaza Mayor, Cáceres, España",
        "telefono-label": "Teléfono:",
        telefono: "+34 927 000 000",
        "email-label": "Email:",
        email: "info@ayto-caceres.es",
        "formulario-titulo": "Formulario de Contacto",
        "nombre-label": "Nombre:",
        "correo-label": "Correo Electrónico:",
        "mensaje-label": "Mensaje:",
        "enviar-btn": "Enviar"
    },
    en: {
        titulo: "Contact",
        subtitulo: "Contact Us",
        descripcion: "If you have any questions, feel free to contact us:",
        "direccion-label": "Address:",
        direccion: "Plaza Mayor, Cáceres, Spain",
        "telefono-label": "Phone:",
        telefono: "+34 927 000 000",
        "email-label": "Email:",
        email: "info@ayto-caceres.es",
        "formulario-titulo": "Contact Form",
        "nombre-label": "Name:",
        "correo-label": "Email Address:",
        "mensaje-label": "Message:",
        "enviar-btn": "Send"
    },
    pt: {
        titulo: "Contato",
        subtitulo: "Entre em Contato",
        descripcion: "Se você tiver alguma dúvida, não hesite em nos contatar:",
        "direccion-label": "Endereço:",
        direccion: "Plaza Mayor, Cáceres, Espanha",
        "telefono-label": "Telefone:",
        telefono: "+34 927 000 000",
        "email-label": "Email:",
        email: "info@ayto-caceres.es",
        "formulario-titulo": "Formulário de Contato",
        "nombre-label": "Nome:",
        "correo-label": "Endereço de Email:",
        "mensaje-label": "Mensagem:",
        "enviar-btn": "Enviar"
    },
    fr: {
        titulo: "Contact",
        subtitulo: "Contactez-nous",
        descripcion: "Si vous avez des questions, n'hésitez pas à nous contacter :",
        "direccion-label": "Adresse :",
        direccion: "Plaza Mayor, Cáceres, Espagne",
        "telefono-label": "Téléphone :",
        telefono: "+34 927 000 000",
        "email-label": "Email :",
        email: "info@ayto-caceres.es",
        "formulario-titulo": "Formulaire de Contact",
        "nombre-label": "Nom :",
        "correo-label": "Adresse Email :",
        "mensaje-label": "Message :",
        "enviar-btn": "Envoyer"
    }
};

// Función para cambiar el idioma
function cambiarIdioma(idioma) {
    const elementos = document.querySelectorAll("[id]");
    elementos.forEach(elemento => {
        const id = elemento.id;
        if (traducciones[idioma][id]) {
            elemento.textContent = traducciones[idioma][id];
        }
    });
}