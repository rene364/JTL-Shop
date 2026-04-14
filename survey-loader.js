function loadGoogleForm() {
    // iFrame mit id
    var target = document.getElementById('umfrage');
    if (target) {
        // Variante B (Sicherer für alle Browser): Das CSS-Display nutzen
        target.style.display = 'block';
    }    
}

