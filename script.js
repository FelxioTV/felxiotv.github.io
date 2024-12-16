// Funktion zum Wechseln der Wiki-Seiten
function showWikiPage(page) {
    const content = {
        'rules': '<h3>Server-Regeln</h3><p>Jeder Benutzer ist verpflichtet, sich freundlich und respektvoll zu verhalten. Beleidigungen, Mobbing, Hass, Verleumdung, Gewalt, Bedrohungen sowie Provokationen, Sexismus, Pornografie und Rechtsextremismus werden in keiner Weise geduldet. Wer andere Nutzer absichtlich belästigt, bedrängt oder nervt, stört den Frieden. Ein solches Verhalten ist somit zu unterlassen.</p>',
        'commands': '<h3>Wichtige Befehle</h3><p>/tpa: Sendet eine Teleportations Anfrage an einen Spieler, /spawn: Teleportiert dich zum Spawn.</p>',
        'events': '<h3>Community-Events</h3><p>Unsere Server-Events bieten dir die Möglichkeit, an spannenden Herausforderungen teilzunehmen.</p>',
        'faq': '<h3>Häufig gestellte Fragen</h3><p>Was ist die IP? Die IP Lautet: 45.89.143.14 </p>',
    };

    // Setze den Inhalt der Wiki-Seite basierend auf der Auswahl
    const wikiContent = document.getElementById('wiki-content');
    if (wikiContent) {
        wikiContent.innerHTML = content[page] || '<p>Seite nicht gefunden.</p>';
    }
}

// Standardmäßig Server-Regeln anzeigen, wenn die Seite geladen wird
document.addEventListener("DOMContentLoaded", function() {
    console.log("Script geladen!"); // Überprüfe, ob das Script geladen wird
    showWikiPage('rules');
});
