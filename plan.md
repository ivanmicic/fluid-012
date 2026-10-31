# Fluid 012 — plan i dnevnik izmena

Ovaj fajl je dnevnik sajta. Svaka naredna izmena upisuje se ovde, sa datumom, šta je urađeno i šta je ostalo otvoreno.

## Firma

- Naziv: Fluid 012 s.z.r. / Aleksandar Aleksić PR
- Delatnost: instalacija i servisiranje grejnih sistema, gasnih i elektro kotlova
- Adresa: Ratarska 177, 12000 Požarevac
- Telefoni: 012 751 6126, 060 300 5900, 060 300 5899
- Ovlašćeni servis: Vaillant, Protherm, Bosch
- Koordinate radnje: 44.6286183, 21.1639427

Radno vreme i pokrivenost uneti su iz skice podnožja: ponedeljak–petak 08:00–17:00, subota 08:00–14:00, nedelja dežurstvo za hitne slučajeve (bez tačnog sata). Pokrivena su Požarevac, Kostolac i okolna mesta. Cene i mejl i dalje nisu uneti.

## Sajt

Statičan, dvojezičan sajt. Srpski je podrazumevani jezik.

- `index.html` — srpski
- `en/index.html` — engleski
- `css/styles.css` — izgled
- `js/main.js` — meni, godina u podnožju, prijava kvara preko WhatsApp-a, apsolutni URL-ovi za deljenje kad sajt nije otvoren kao fajl
- `404.html` — stranica za nepostojeću adresu
- `favicon.svg`, `site.webmanifest`, `robots.txt`, `sitemap.xml`
- `images/` — krupni planovi kotla, cevi i zidnog kotla, plus slika za deljenje

Prvi ekran je tamna najava: ovlašćeni servis za Vaillant, Protherm i Bosch, dva poziva na akciju (prijava kvara i brzi saveti) i hitan poziv na 060 300 5900. Fotografije opreme ostaju niže na stranici, kod rezervnih delova i u odeljku o radnji.

Prijava kvara otvara WhatsApp na 060 300 5900 (`381603005900`) sa spremnom porukom. Sajt i dalje nema mejl. Telefonski poziv ostaje na 012 751 6126, 060 300 5900 i 060 300 5899.

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

### 2026-10-27

Sajt je objavljen na Vercelu, projekat `fluid-012`, tim Ivan Micic's projects. Produkcija: https://fluid-012.vercel.app. Objava je iz lokalnog foldera preko Vercel CLI-ja; GitHub repozitorijum još nije povezan, pa push na `main` sam ne osvežava sajt. `plan.md` nije deo javnog sajta.

### 2026-10-29

Novi prvi ekran po skici: bedž ovlašćenog servisa, naslov, dva dugmeta i red za hitne intervencije. Broj u skici (060 / XXX-XXXX) zamenjen je sa 060 300 5900. Ispod heroja su brzi saveti i obrazac koji priprema prijavu za telefonski poziv. Isto stoji i na engleskoj stranici.

Brzi saveti su zamenjeni harmonikom sa četiri provere: pritisak, baterije termostata, reset kodova F22 i F28, odzračivanje radijatora. Baner ispod vodi na prijavu.

Obrazac prijave šalje poruku na WhatsApp broj 060 300 5900. U skici je stajao prazan broj 381600000000 i domen fluid012.rs; oba su izostavljena. Poruka ide na pravi mobilni, bez navedenog domena. Česta pitanja više ne traže da se prijava čita preko telefona.

Odeljak brendova je tamna mreža kartica: Vaillant, Protherm i Bosch, plus traka originalni delovi, dijagnostika na terenu i garancija na rad. Zvanični linkovi proizvođača ostaju na karticama. Ikona garancije iz skice je zamenjena dokumentom, jer nacrtana linija izlazi iz okvira.

Slova V, P i B zamenjena su zvaničnim logotipima na beloj pločici: Vaillant i Bosch iz Wikimedia fajlova (vektor sa sajtova proizvođača), Protherm sa protherm.eu. Logotipi označavaju brendove koje radnja servisira.

Dodat je odeljak godišnjeg servisa: preporuka za maj–septembar naspram gužve od oktobra do decembra, i četiri stavke pregleda. Dugme vodi na WhatsApp prijavu. Ispravljena je greška „nen servisiranom”. Navod o većoj potrošnji do 15% preuzet je iz skice.

Podnožje je tamna mreža od tri kolone: radnja, radno vreme i tri brza linka. Na uskom ekranu fiksna traka ima prijavu kvara i hitan poziv. Broj 0600000000 iz skice zamenjen je sa 060 300 5900. Nedelja u strukturiranim podacima nema sat jer dežurstvo nema naveden termin.

Naslov stranice je „Servis gasnih kotlova Požarevac | Fluid 012”. Opis u pretrazi pominje ovlašćeni servis za Vaillant, Protherm i Bosch i prijavu kvara ili brze savete. Isti tekst stoji i u deljenju. Engleska stranica ima prevod.

Ova verzija ide na GitHub, grana `main`, repozitorijum `ivanmicic/fluid-012`. Push sam ne osvežava https://fluid-012.vercel.app jer GitHub i Vercel projekat nisu povezani. `plan.md` ostaje van javnog sajta.

### 2026-10-31

Raspored odeljaka, na srpskom i engleskom: prvi ekran, brza dijagnostika, WhatsApp prijava, brendovi sa trakom poverenja (traka originalnih delova ostaje uvod u brendove), zatim postojeći odeljci usluge, o radnji, česta pitanja i kontakt, pa godišnji servis pred kraj, i na kraju podnožje sa fiksnom trakom na uskom ekranu. Gornji meni prati taj red: Saveti, Prijava, Brendovi, Usluge, O nama, Kontakt, Servis. Sadržaj odeljaka nije menjan. U hitnoj traci prvog ekrana pitanje i broj više nisu razmaknuti na dva kraja: stoje jedno uz drugo, spojeni kratkom crvenom crtom. U praznini desno od naslova „Česta pitanja” stoji isti bled watermark kao „012” kod usluga, sa natpisom „fluid 012”. Sačuvan ugalj, na njega se vraćamo: tamno `#3a4046`, malo svetlije `#454c53`, podnožje `#2e343a`, sjaj `#5c656c`, kartice `#32383e`. Vatra je odbačena. Plava i maslinasta su probane. Trenutna proba je po uzoru na Lovable šablon „Ignite”: skoro crna topla podloga, narandžasti sjaj na vrhu prvog ekrana i fina kvadratna mreža od 56 px preko svih tamnih sekcija, zaključana za ekran da se poklapa između sekcija. Prvi ekran ima bogatiji narandžasti snop sa vrha na sredini, a ceo sadržaj prvog ekrana je centriran. Usluge više nisu bež krem: svetla toplo-siva podloga sa istom mrežom u tamnim linijama. U kontaktu su naslov, adresa, oznake, brojevi i link za mapu u narandžastoj sa naslovne. Provereno na širinama iPhone ekrana od 320 do 430 px: ništa ne izlazi van ekrana, meni radi, polja forme imaju 17 px pa iPhone ne zumira. Za Safari na telefonu mreža se ne vezuje za ekran (iOS to ne podržava), donja traka ima -webkit- zamućenje, a veličina slova se ne menja pri okretanju telefona. Krem i dužina preliva ostaju. Još nije objavljeno na Vercel.

## Otvoreno

- Domen, pa zamena `SITE_DOMAIN` u `sitemap.xml` i `robots.txt`, i povezivanje tog domena na Vercel projekat
- Povezivanje GitHub repozitorijuma `ivanmicic/fluid-012` sa Vercel projektom, ako naredne izmene treba da idu same na produkciju
- Prave fotografije radova, ako ih firma pošalje
- Cene i mejl, ako treba da stoje na sajtu. Prijava kvara ide preko WhatsApp-a.
