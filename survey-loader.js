function loadGoogleForm() {
    var googleUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdr7mTb-_EiZpe48nO7ufwp35CRXXAXarkOQ2V5RGJm_Gs1tQ/viewform?embedded=true";
    var target = document.getElementById('survey-target');
    var box = document.getElementById('survey-box');
    
    if (target && box) {
        // Iframe erstellen
        var iframe = document.createElement('iframe');
        iframe.src = googleUrl;
        iframe.width = "100%";
        iframe.height = "200";
        iframe.frameBorder = "0";
        iframe.title = "Umfrage";

        // Sobald das Iframe lädt, korrigieren wir den Scroll
        iframe.onload = function() {
            setTimeout(function() {
                // Berechne Position minus Platz für den Nova-Header (ca. 150px)
                var offset = target.getBoundingClientRect().top + window.pageYOffset - 150;
                window.scrollTo({ top: offset, behavior: 'smooth' });
                
                // Fokus vom Iframe wegnehmen, damit Google nicht wieder springt
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }, 100); // Kurze Verzögerung, damit Google fertig fokussiert hat
        };

        target.innerHTML = ''; // Platzhalter leeren
        target.appendChild(iframe);
        box.style.display = 'none';
    }
}
