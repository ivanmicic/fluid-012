# Fluid 012 — plan i dnevnik izmena

Ovaj fajl je dnevnik sajta. Svaka naredna izmena upisuje se ovde, sa datumom, šta je urađeno i šta je ostalo otvoreno.

## Firma

- Naziv: Fluid 012 s.z.r. / Aleksandar Aleksić PR
- Delatnost: instalacija i servisiranje grejnih sistema, gasnih i elektro kotlova
- Adresa: Ratarska 177, 12000 Požarevac
- Telefoni: 012 751 6126, 060 300 5900, 060 300 5899
- Ovlašćeni servis: Vaillant, Protherm, Bosch
- Koordinate radnje: 44.6286183, 21.1639427

Cene, radno vreme i mejl nisu uneti jer nisu bili u polaznim podacima.

## Sajt

Statičan, dvojezičan sajt. Srpski je podrazumevani jezik.

- `index.html` — srpski
- `en/index.html` — engleski
- `css/styles.css` — izgled
- `js/main.js` — meni, godina u podnožju, apsolutni URL-ovi za deljenje kad sajt nije otvoren kao fajl
- `404.html` — stranica za nepostojeću adresu
- `favicon.svg`, `site.webmanifest`, `robots.txt`, `sitemap.xml`
- `images/` — krupni planovi kotla, cevi i zidnog kotla, plus slika za deljenje

Prvi ekran je krupni plan otvorenog gasnog kotla, preko celog prozora, sa sporim približavanjem. Ista vrsta kadra ponavlja se kod rezervnih delova.

Linkovi ka proizvođačima:

- Vaillant: https://www.vaillant.rs/ i stranica o originalnim rezervnim delovima
- Protherm: https://protherm.rs/ i servisna mreža
- Bosch Home Comfort: sistemi grejanja i tehnička podrška za Srbiju

Fotografije su atmosferični krupni planovi opreme. Mogu da se zamene pravim slikama sa terena.

## SEO

- Poseban naslov i opis na srpskom i engleskom
- `hreflang` za `sr`, `en` i `x-default`
- Jedan glavni naslov po stranici
- Strukturirani podaci: HVACBusiness, WebPage, FAQPage
- Ključne reči u tekstu: servis gasnih kotlova, Požarevac, ugradnja, Vaillant, Protherm, Bosch

U `sitemap.xml` i `robots.txt` domen je označen kao `SITE_DOMAIN`. Kad firma dobije domen, ta oznaka se menja pravom adresom (bez kose crte na kraju), a red za sitemap u `robots.txt` se uključuje. Sajt treba da stoji u korenu domena.

## Dnevnik

### 2026-10-22

Prva verzija sajta: početna na srpskom i engleskom, kontakt i mapa, usluge, brendovi, česta pitanja, SEO osnova i linkovi ka Vaillantu, Prothermu i Boschu. Dodat je ovaj dnevnik.

## Otvoreno

- Domen, pa zamena `SITE_DOMAIN`
- Prave fotografije radova, ako ih firma pošalje
- Cene i radno vreme, ako treba da stoje na sajtu
- Objava na hostingu
