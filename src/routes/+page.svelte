<script>
    import "$lib/styleguide.css";

    import NameField from "$lib/NameField.svelte";
    import TextField from "$lib/TextField.svelte";
    import Footer from "$lib/Footer.svelte";

    let { data } = $props();
    const chama = $derived(data.chama);
    const mugshot = $derived(
        `https://fdnd.directus.app/assets/${chama.mugshot}`,
    );
</script>

<main>
    <header>
        <h1>Visitekaartje</h1>
        <img src={mugshot} alt={`Foto van ${data.chama.name}`} width="100px" />
    </header>

    <h2>Persoonlijke gegevens</h2>
    <section>
        <NameField text={chama.name} label="Volledige naam:" />
        <NameField text={chama.nickname} label="Nickname:" />
        <TextField text={chama.birthdate} label="Geboortedatum:" />
        <TextField text="Vrouw" label="Geslacht:" />
        <TextField text={chama.residency} label="Woonplaats:" />
        <TextField text="262" label="ID:" />

        <div class="bio">
            <p class="label">Introductie:</p>
            <p class="bio-text">{chama.bio}</p>
        </div>
    </section>

    <h2>favorieten</h2>
    <section>
        <TextField text={chama.fav_color} label="Kleur:" />
        <TextField
            text={chama.fav_border_radius}
            label="Border-radius waarde:"
        />
        <TextField text={chama.fav_season} label="Seizoen:" />
        <TextField text={chama.fav_game} label="Gameseries:" />
        <TextField text={chama.fav_emoji} label="Emoji:" />
        <TextField text={chama.fav_animal} label="Dier:" />
    </section>

    <div class="embed">
        <iframe
            data-testid="embed-iframe"
            title="Favoriete Spotify nummer"
            src="https://open.spotify.com/track/1JRZofiAZNPp4e4zn3oBl3"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>
    </div>

    <Footer chama={data.chama} />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: var(--default-spacing);

        @media (width >= 1200px) {
            background-color: var(--baby-blue);
            border: thick double var(--dark-blue);
            padding: var(--large-spacing);
            border-radius: 10px;
            box-shadow:
                rgba(0, 0, 0, 0.09) 0px 2px 1px,
                rgba(0, 0, 0, 0.09) 0px 4px 2px,
                rgba(0, 0, 0, 0.09) 0px 8px 4px,
                rgba(0, 0, 0, 0.09) 0px 16px 8px,
                rgba(0, 0, 0, 0.09) 0px 32px 16px;
        }
    }

    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: var(--default-spacing);
        border-bottom: 2px solid var(--dark-blue);
        padding-bottom: var(--small-spacing);
        margin-bottom: var(--large-spacing);

        & img {
            width: 150px;
            aspect-ratio: 1 / 1;
            transform: rotate(-21deg);
            transform-origin: center center;
            border: 5px solid var(--white);
            object-fit: cover;

            box-shadow:
                rgba(0, 0, 0, 0.09) 0px 2px 1px,
                rgba(0, 0, 0, 0.09) 0px 4px 2px,
                rgba(0, 0, 0, 0.09) 0px 8px 4px,
                rgba(0, 0, 0, 0.09) 0px 16px 8px,
                rgba(0, 0, 0, 0.09) 0px 32px 16px;
        }

        & h1 {
            margin: 0;
        }

        @media (width <= 530px) {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    section {
        margin-bottom: var(--large-spacing);
        display: grid;
        grid-template-columns: max-content 1fr;
        justify-content: space-between;
        row-gap: var(--large-spacing);
        column-gap: 8em;

        @media (width <= 530px) {
            grid-template-columns: 1fr;
        }
    }

    h2 {
        color: var(--white);
        background-color: var(--dark-blue);
        padding-left: var(--small-spacing);
        margin-bottom: var(--default-spacing);
    }

    .bio {
        display: contents;
    }

    .bio-text {
        border-bottom: 1px solid hsl(0, 0%, 0%);
    }

    .label {
        font-weight: var(--font-bold);
    }

    .embed {
        width: 24rem;
        border: 2px solid var(--accent);
        border-radius: var(--radius);
        background-color: var(--white);
        overflow: hidden;

        @media (width <= 426px) {
            width: auto;
        }
    }

    .embed iframe {
        display: block;
        width: 100%;
        height: 100%;
        border: none;
    }
</style>
