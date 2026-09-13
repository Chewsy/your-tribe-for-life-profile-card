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
    <NameField text={chama.name} label="Volledige naam:" />
    <NameField text={chama.nickname} label="Nickname:" />
    <TextField text={chama.birthdate} label="Geboortedatum:" />
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
</style>
