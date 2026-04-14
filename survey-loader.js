function loadGoogleForm() {
    var googleUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdr7mTb-_EiZpe48nO7ufwp35CRXXAXarkOQ2V5RGJm_Gs1tQ/viewform?embedded=true";
    var target = document.getElementById('survey-target');
    var box = document.getElementById('survey-box');
    
    if (target && box) {
        // 1. Box sofort ausblenden
        //box.style.display = 'none';

        // 2. Iframe erstellen
        var iframe = document.createElement('iframe');
        iframe.src = googleUrl;
        //iframe.width = "100%";
        //iframe.height = "1000";
        iframe.style.border = "none";
        
        // 3. Wenn geladen, ganz nach oben scrollen
        iframe.onload = function() {
            window.scrollTo({
                top: 100, 
                behavior: 'smooth' 
            });
            
            // Fokus auf den Body setzen, damit Google nicht wieder nach unten springt
            //document.body.setAttribute('tabindex', '-1');
            //document.body.focus({preventScroll: true});
        };

        target.appendChild(iframe);
    }
}
