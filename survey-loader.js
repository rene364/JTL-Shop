function loadGoogleForm() {
    var wrapper = document.getElementById('umfrage');
    var box = document.getElementById('survey-box');
    
    if (wrapper && box) {
        // 1. Button-Box ausblenden
        box.style.display = 'none';

        // 2. Umfrage-Container einblenden
        wrapper.style.display = 'block';

        // 3. Fokus-Abkopplung
        // Wir setzen den Fokus auf den Wrapper, damit Google nicht 
        // automatisch zum ersten Eingabefeld springt.
        wrapper.setAttribute('tabindex', '-1');
        wrapper.focus({ preventScroll: true });

        // 4. Sanft nach oben scrollen
        // top: 0 springt ganz hoch. Falls der Nova-Header etwas verdeckt,
        // kannst du top: wrapper.offsetTop - 100 nutzen.
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
