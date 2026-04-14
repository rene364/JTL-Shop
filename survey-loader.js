function loadGoogleForm() {
    var googleUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdr7mTb-_EiZpe48nO7ufwp35CRXXAXarkOQ2V5RGJm_Gs1tQ/viewform?embedded=true";
    var target = document.getElementById('survey-target');
    var box = document.getElementById('survey-box');
    
    if (target && box) {
        // 1. CSS für Ladebalken hinzufügen
        if (!document.getElementById('survey-style')) {
            var style = document.createElement('style');
            style.id = 'survey-style';
            style.innerHTML = `
                .loader-line { width: 100%; height: 4px; background-color: #eee; position: relative; overflow: hidden; transition: opacity 0.3s; }
                .loader-line::after { content: ""; position: absolute; left: -50%; height: 4px; width: 50%; background-color: #1a73e8; animation: lineAnim 1.5s infinite linear; }
                @keyframes lineAnim { 0% { left: -50%; } 100% { left: 100%; } }
            `;
            document.head.appendChild(style);
        }

        // 2. Ladebalken anzeigen
        target.innerHTML = '<div id="survey-loader" class="loader-line"></div>';
        
        // 3. Iframe erstellen und konfigurieren
        var iframe = document.createElement('iframe');
        iframe.src = googleUrl;
        iframe.width = "100%";
        iframe.height = "1000"; // Etwas höher für weniger Scrollen im Iframe
        iframe.frameBorder = "0";
        iframe.style.display = "none";
        iframe.title = "Google Form Umfrage";
        
        // 4. Fokus-Korrektur und Anzeige nach dem Laden
        iframe.onload = function() {
            document.getElementById('survey-loader').style.display = "none";
            iframe.style.display = "block";
            
            // Korrektur: Springt zum Anfang des Formulars, nicht in die Mitte
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth'
            });
            
            // Fokus klauen, damit Google nicht zum ersten Feld springt
            target.setAttribute('tabindex', '-1');
            target.focus({preventScroll:true});
        };
        
        target.appendChild(iframe);
        box.style.display = 'none';
    }
}
