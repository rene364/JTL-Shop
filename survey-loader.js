function loadGoogleForm() {
    // iFrame mit id
    if (target) {
        // Variante A: Das HTML-Attribut auf false setzen
        //target.hidden = false; 
        
        // Variante B (Sicherer für alle Browser): Das CSS-Display nutzen
        target.style.display = 'block';
         // Den Fokus aktiv vom iFrame weglenken
        container.setAttribute('tabindex', '-1'); // Macht das Div fokussierbar
        container.focus({ preventScroll: true }); // Setzt Fokus, verbietet aber das Scrollen

        iframe.onload = function() {
    setTimeout(function() {
        window.scrollTo(200, 0); // Zwingt den Browser nach ganz oben
        document.activeElement.blur(); // Entzieht dem gerade aktiven Element (iFrame) den Fokus
    }, 50); 
};
    
    }
}
