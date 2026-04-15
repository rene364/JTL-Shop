function loadGoogleForm() { 
    var googleUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdr7mTb-_EiZpe48nO7ufwp35CRXXAXarkOQ2V5RGJm_Gs1tQ/viewform?embedded=true"; 
    var target = document.getElementById('survey-target'); 
    var box = document.getElementById('survey-box'); 
    
    // 1. Inhalt setzen und Box ausblenden
    // Tipp: width="100%" macht es mobil-freundlicher
    target.innerHTML = '<iframe src="' + googleUrl + '" width="100%" height="654" frameborder="0" marginheight="0" marginwidth="0">Lädt...</iframe>'; 
    box.style.display = 'none';

    // 2. Fokus-Abkopplung mit minimaler Verzögerung
    // Wir warten 50ms, damit der Browser das iFrame registriert hat,
    // und "stehlen" dann den Fokus.
    setTimeout(function() {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        
        // 3. Scroll nach ganz oben (berücksichtigt den JTL-Header)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
}
