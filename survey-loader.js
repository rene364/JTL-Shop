function loadGoogleForm() {
    var wrapper = document.getElementById('umfrage');
    var box = document.getElementById('survey-box');
    
    if (wrapper && box) {
        // 1. Umfrage anzeigen
        box.style.display = 'none';
        wrapper.style.display = 'block';

        // Fallback, falls der Button nicht gefunden wird
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // 3. Fokus abkoppeln, damit Google nicht zurückspringt
        //wrapper.setAttribute('tabindex', '-1');
        //wrapper.focus({ preventScroll: true });
    }
}
