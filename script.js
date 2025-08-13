function operateModal() {
    document.getElementById('mapa').addEventListener('click', () => {
        document.getElementById('modal_container').style.display = 'flex';
        initMap();
    });

    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('modal_container').style.display = 'none';
    });
}

function initMap() {
    // Evita recriar o mapa se ele já foi inicializado
    if (window.gmapInstance) {
        setTimeout(() => {
            window.gmapInstance.invalidateSize();
        }, 200);
        return;
    }

    const map = L.map('gmap').setView([-23.6832317, -47.0286668], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-23.6832317, -47.0286668])
        .addTo(map)
        .bindPopup('Cotia, SP, Centro')
        .openPopup();

    window.gmapInstance = map;
}

operateModal();
