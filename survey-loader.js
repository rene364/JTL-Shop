function loadGoogleForm() {
    var wrapper = document.getElementById('umfrage');
    var box = document.getElementById('survey-box');
    
    if (wrapper && box) {
        // 1. Umfrage anzeigen
        box.style.display = 'none';
        wrapper.style.display = 'block';

        // 2. Den JTL "Go-to-top" Button suchen und triggern
        var topButton = document.querySelector('#footer > div.smoothscroll-top.go-to-top.scroll-to-top show');
        
        if (topButton) {
            topButton.click(); // Simuliert den Klick des Nutzers
        } else {
            // Fallback, falls der Button nicht gefunden wird
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // 3. Fokus abkoppeln, damit Google nicht zurückspringt
        wrapper.setAttribute('tabindex', '-1');
        wrapper.focus({ preventScroll: true });
    }
}
