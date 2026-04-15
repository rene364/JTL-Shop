function loadGoogleForm() {
    // ERSETZE DEN LINK UNTEN DURCH DEINEN EIGENEN GOOGLE-LINK 
    var googleUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdr7mTb-_EiZpe48nO7ufwp35CRXXAXarkOQ2V5RGJm_Gs1tQ/viewform?embedded=true";
    var target = document.getElementById('survey-target');
    var box = document.getElementById('survey-box');
    target.innerHTML = '<iframe src="' + googleUrl + '" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Lädt...</iframe>';
    box.style.display = 'none'; // Blendet den Hinweistext nach Klick aus
}
