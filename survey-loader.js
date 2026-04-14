function loadGoogleForm() {
    // iFrame mit id
    if (target) {
        // Variante A: Das HTML-Attribut auf false setzen
        //target.hidden = false; 
        
        // Variante B (Sicherer für alle Browser): Das CSS-Display nutzen
        target.style.display = 'block';
    }
}
