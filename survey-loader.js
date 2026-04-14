function loadGoogleForm() {
    var googleUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdr7mTb-_EiZpe48nO7ufwp35CRXXAXarkOQ2V5RGJm_Gs1tQ/viewform?embedded=true";
    var target = document.getElementById('survey-target');
    var box = document.getElementById('survey-box');
    
    if (target && box) {
        // 1. Box ausblenden
        box.style.display = 'none';

        // 2. Iframe dynamisch erstellen
        var iframe = document.createElement('iframe');
        iframe.src = googleUrl;
        iframe.width = "100%";
        iframe.height = "1000";
        iframe.style.border = "none";
        iframe.style.opacity = "0"; // Erst unsichtbar, um Flackern zu vermeiden
        iframe.style.transition = "opacity 0.5s";
        
        // 3. PRÜFUNG: Wann ist das Iframe fertig?
        iframe.onload = function() {
            // Iframe sichtbar machen
            iframe.style.opacity = "1";
            
            // Verzögerung, um den automatischen Google-Fokus abzufangen
            setTimeout(function() {
                // Position des Targets berechnen
                // Wir ziehen 150px ab, damit der Nova-Header nicht drüber liegt
                const yOffset = -150; 
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({top: y, behavior: 'smooth'});

                // Fokus auf das Target setzen, um Google den Fokus zu "entziehen"
                target.setAttribute('tabindex', '-1');
                target.focus({preventScroll: true});
            }, 200); // 200ms warten sicherheitshalber
        };

        target.appendChild(iframe);
    }
}
