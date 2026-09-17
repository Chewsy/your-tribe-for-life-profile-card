# Visitekaartje

<img width="auto" height="200" alt="image" src="https://github.com/user-attachments/assets/860eb21b-1fa8-4d41-a84f-f033b977fca1" />


[Live link](https://lighthearted-haupia-6ee8d9.netlify.app/)  

---

<img width="1920" height="1440" alt="96shots_so" src="https://github.com/user-attachments/assets/ecddad03-413c-4ad3-a51a-98f4f21648d2" />


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Code conventies](#code-conventies)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Ik heb voor de laatste keer mijn visitekaartje herontworpen en gebouwd, deze keer met behulp van het framework SvelteKit.

## Gebruik
Als gebruiker kom je direct op mijn visitekaartje terecht. De pagina toont mijn persoonlijke gegevens, mijn favorieten, een Spotify-embed met mijn favoriete nummer en mijn socials.

## Kenmerken

### Directus (headless CMS)
De pagina haalt mijn persoonsgegevens op uit de Directus API (`https://fdnd.directus.app/items/person/262`). In `+page.server.js` pak ik direct de data uit de response en geef die als `chama` mee aan de andere paginas.

https://github.com/Chewsy/your-tribe-for-life-profile-card/blob/main/src/routes/%2Bpage.server.js#L1-L7

### SvelteKit (framework)
De website maakt gebruik van herbruikbare componenten:
- `NameField` renderd een label en mijn naam als losse letters in blokjes.
- `TextField` renderd een label met overige opgehaalde data.
- `Footer` renderd de socials op basis van de data.

### Visitekaartje

#### Media queries**
https://github.com/Chewsy/your-tribe-for-life-profile-card/blob/cea2f758be0464e9082fd3d9fb0f0fad80aefd91/src/routes/%2Bpage.svelte#L69-L80
https://github.com/Chewsy/your-tribe-for-life-profile-card/blob/cea2f758be0464e9082fd3d9fb0f0fad80aefd91/src/lib/styleguide.css#L69-L74

vanaf `1200px` krijgt de pagina een skeuomorphism effect waarbij de visitekaart op een echt invulformulier op een houten tafel lijkt.  

Vanaf `530px` en kleiner veranderd het grid systeem naar een enkel kolom systeem om responsiveness te behouden. 

#### NameField component
Met NameField kan ik zowel mijn naam als mijn bijnaam tonen.

https://github.com/Chewsy/your-tribe-for-life-profile-card/blob/cea2f758be0464e9082fd3d9fb0f0fad80aefd91/src/lib/NameField.svelte#L3
Dit stukje code stopt alle woorden gesplits met een spatie in een gedefinieerde array.

https://github.com/Chewsy/your-tribe-for-life-profile-card/blob/cea2f758be0464e9082fd3d9fb0f0fad80aefd91/src/lib/NameField.svelte#L9-L18
In de each loop wordt elk woord opgesplits in letters en in een woord container gestopt.  

https://github.com/Chewsy/your-tribe-for-life-profile-card/blob/cea2f758be0464e9082fd3d9fb0f0fad80aefd91/src/lib/NameField.svelte#L41-L46
Elke letter krijgt een gestylde classname mee. Hierdoor lijken de woorden op de vakjes die je tegenkomt op invulformulieren.  

<img width="677" height="85" alt="image" src="https://github.com/user-attachments/assets/21230b20-b9d7-4fc8-803f-ab4df7ac6c2c" />


## Installatie
Om het project op te starten volg je de volgende stappen

1. clone het project
2. installeer de packages benodigd voor het project
   ```bash
   npm install
   ```
3. start het project lokaal op
   ```bash
   npm run dev
   ```

## Code conventies
De gebruikte code conventies kan je hier vinden  
[Code conventies](https://docs.fdnd.nl/conventies.html#code-conventies)

## Bronnen
- [Leertaak: Your Tribe for Life - Profile Card (wiki)](https://github.com/fdnd-task/your-tribe-for-life-profile-card/wiki)
- [SvelteKit Docs @ Svelte.dev](https://svelte.dev/docs/kit/introduction)
- [Directus API Reference @ Directus Docs](https://directus.io/docs/api)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
