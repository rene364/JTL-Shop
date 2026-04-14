function loadGoogleForm() {
    var googleUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdr7mTb-_EiZpe48nO7ufwp35CRXXAXarkOQ2V5RGJm_Gs1tQ/viewform?embedded=true";
    var target = document.getElementById('survey-target');
    var box = document.getElementById('survey-box');
    
    if (target && box) {
        target.innerHTML = '<iframe src="' + googleUrl + '" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0" title="Google Form Umfrage">Lädt...</iframe>';
        box.style.display = 'none';
        // Optional: Scrollt zum Formular, falls die Seite lang ist
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

iframe.onload = function() {
    // 1. Ladebalken verstecken und Iframe zeigen
    document.getElementById('survey-loader').style.display = "none";
    iframe.style.display = "block";
    
    // 2. Den Fokus vom Iframe wegnehmen und nach oben springen
    window.scrollTo(0, target.offsetTop - 50); // -50 für etwas Puffer nach oben
    
    // 3. Den Fokus auf das Ziel-Element setzen, damit Google nicht scrollt
    target.setAttribute('tabindex', '-1');
    target.focus();
};

