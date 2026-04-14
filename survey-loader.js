function loadGoogleForm() {
    var wrapper = document.getElementById('umfrage');
    var box = document.getElementById('survey-box'); // Deine Button-Box
    
    if (wrapper) {
        // 1. Box mit Button ausblenden
        if(box) box.style.display = 'none';

        // 2. Umfrage einblenden
        wrapper.style.display = 'block';

        // 3. FOKUS-ABKOPPLUNG: 
        // Wir setzen den Fokus auf den Wrapper selbst und verbieten das Scrollen.
        // Das "klaut" Google den automatischen Fokus auf das erste Eingabefeld.
        wrapper.setAttribute('tabindex', '-1'); 
        wrapper.focus({ preventScroll: true });

        // 4. Sicherstellen, dass wir oben bleiben (für JTL Nova Header)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

