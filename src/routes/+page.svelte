<script>
    import "$lib/styleguide.css";

    import NameField from "$lib/NameField.svelte";
    import TextField from "$lib/TextField.svelte";

    let { data } = $props();
    const chama = $derived(data.chama);
    const mugshot = $derived(
        `https://fdnd.directus.app/assets/${chama.mugshot}`,
    );
</script>

<main>
    <!-- <img src={mugshot} alt={`Foto van ${data.chama.name}`} width="100px" /> -->

    <h1>Visitekaartje</h1>

    <section>
        <h2>Persoonlijke gegevens</h2>
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

    <section>
        <h2>favorieten</h2>
        <TextField text={chama.fav_color} label="Kleur:" />
        <TextField text={chama.fav_border_radius} label="Border-radius waarde:" />
        <TextField text={chama.fav_season} label="Seizoen:" />
        <TextField text={chama.fav_game} label="Gameseries:" />
        <TextField text={chama.fav_emoji} label="Emoji:" />
        <TextField text={chama.fav_animal} label="Dier:" />
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: var(--default-spacing);
    }

    h1 {
        padding-bottom: var(--small-spacing);
        border-bottom: 2px solid var(--dark-blue);
        margin-bottom: var(--large-spacing);
    }

    section {
        margin-bottom: var(--large-spacing);
    }

    h2 {
        color: var(--white);
        background-color: var(--dark-blue);
        padding-left: var(--small-spacing);
        margin-bottom: var(--default-spacing);
    }

    .bio-text {
        border-bottom: 1px solid hsl(0, 0%, 0%);
        width: 300px;
    }

    .label {
        font-weight: var(--font-bold);
    }
</style>
