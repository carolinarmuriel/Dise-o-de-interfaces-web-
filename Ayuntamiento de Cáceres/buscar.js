function buscar() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!input) return;

    // Busca todas las secciones principales dentro de <main>
    const secciones = document.querySelectorAll('main section');
    let encontrado = false;

    secciones.forEach(section => {
        if (section.innerText.toLowerCase().includes(input) && !encontrado) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            section.style.boxShadow = '0 0 0 4px #C4A000';
            section.style.transition = 'box-shadow 0.5s';
            encontrado = true;
            setTimeout(() => {
                section.style.boxShadow = '';
            }, 2000);
        }
    });

    if (!encontrado) {
        alert('No se encontró la palabra: ' + input);
    }
}