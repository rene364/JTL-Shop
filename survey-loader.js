function loadGoogleForm() {
    // iFrame mit id
    if (target) {
        // Variante B (Sicherer für alle Browser): Das CSS-Display nutzen
        target.style.display = 'block';
         // Den Fokus aktiv vom iFrame weglenken
        target.setAttribute('tabindex', '-1'); // Macht das Div fokussierbar
        target.focus({ preventScroll: true }); // Setzt Fokus, verbietet aber das Scrollen
    }    
}

