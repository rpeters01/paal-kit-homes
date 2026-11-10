# PAAL Kit Homes v2.0 Stable

Deze repository bevat de statische PAAL onderzoekssite en projectplanner. GitHub Pages publiceert de hoofdbranch vanuit de hoofdmap:

**https://rpeters01.github.io/paal-kit-homes/**

De startpagina geeft toegang tot de kostenplanner, perceelplanner, bouwplanning, het projectdashboard en de projecttools. Er is geen buildstap; de HTML, CSS en JavaScript in deze repository zijn de gepubliceerde site.

## Projecten en back-ups

Projectgegevens staan in de browseropslag van het adres waarop je de planner gebruikt. De online site heeft daarom andere opslag dan `http://localhost:8765`. Een bestaande lokale projectback-up moet je in de online kostenplanner via **Restore backup** importeren. Maak eerst een JSON-back-up van het gewenste project in de lokale versie en bewaar die apart. GitHub Pages synchroniseert projecten niet tussen browsers of apparaten en deze repository bevat geen persoonlijke projectgegevens.

## Lokaal testen

Start in deze map `python3 -m http.server 8765` en open `http://localhost:8765/`. Voor de broncontroles: `for f in test-*.js; do node "$f" || exit; done`.

De bedragen en perceelschetsen zijn indicatief; controleer prijzen, vergunningen en technische eisen bij de betrokken leveranciers en bevoegde instanties.
