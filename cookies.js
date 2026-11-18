
document.addEventListener("DOMContentLoaded", function () {

    const banner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("cookie-accept");
    const rejectButton = document.getElementById("cookie-reject");
    const settingsLinks = document.querySelectorAll(".cookie-settings");

    if (!banner || !acceptButton || !rejectButton) return;

    // Google Tag Manager ID
    const GTM_ID = "GTM-KNBZ7WTK";

    // Google Tag Manager nur einmal laden
    let trackingLoaded = false;

    function loadTracking() {

        if (trackingLoaded) return;

        trackingLoaded = true;

        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
            "gtm.start": new Date().getTime(),
            event: "gtm.js"
        });

        const script = document.createElement("script");

        script.async = true;
        script.src = "https://www.googletagmanager.com/gtm.js?id=" + GTM_ID;

        document.head.appendChild(script);
    }

    // Gespeicherte Entscheidung abrufen
    const consent = localStorage.getItem("rocknfind-cookie-consent");

    // Bereits akzeptiert: Tracking aktivieren
    if (consent === "accepted") {

        loadTracking();

    }

    // Noch keine Entscheidung: Banner anzeigen
    if (consent !== "accepted" && consent !== "rejected") {

        banner.hidden = false;

    }

    // ALLE AKZEPTIEREN
    acceptButton.addEventListener("click", function () {

        localStorage.setItem("rocknfind-cookie-consent", "accepted");

        banner.hidden = true;

        loadTracking();

    });

    // ABLEHNEN
    rejectButton.addEventListener("click", function () {

        localStorage.setItem("rocknfind-cookie-consent", "rejected");

        banner.hidden = true;

        // Bereits geladenes Tracking kann nicht
        // zuverlässig rückwirkend entfernt werden.
        // Deshalb Seite neu laden.
        window.location.reload();

    });

    // COOKIE-EINSTELLUNGEN ERNEUT ÖFFNEN
    settingsLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            banner.hidden = false;

        });

    });

});
