
document.addEventListener("DOMContentLoaded", function () {

    const banner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("cookie-accept");
    const rejectButton = document.getElementById("cookie-reject");
    const settingsLinks = document.querySelectorAll(".cookie-settings");

    if (!banner || !acceptButton || !rejectButton) return;

    // Gespeicherte Entscheidung abrufen
    const consent = localStorage.getItem("rocknfind-cookie-consent");

    // Banner beim ersten Besuch anzeigen
    if (consent !== "accepted" && consent !== "rejected") {
        banner.hidden = false;
    }

    // Alle akzeptieren
    acceptButton.addEventListener("click", function () {

        localStorage.setItem("rocknfind-cookie-consent", "accepted");

        banner.hidden = true;

    });

    // Ablehnen
    rejectButton.addEventListener("click", function () {

        localStorage.setItem("rocknfind-cookie-consent", "rejected");

        banner.hidden = true;

    });

    // COOKIE-EINSTELLUNGEN ERNEUT ÖFFNEN
    settingsLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            banner.hidden = false;

        });

    });

});
