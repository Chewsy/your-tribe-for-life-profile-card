<script>
    import NameField from "$lib/NameField.svelte";

    let { data } = $props();
    const chama = $derived(data.chama);
    const mugshot = $derived(`https://fdnd.directus.app/assets/${chama.mugshot}`);
</script>

<main>
    <img src={mugshot} alt={`Foto van ${data.chama.name}`} width="100px" />
    <NameField chama={data.chama} />
</main>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    /* ! Tijdelijk ! */
    main {
        width: 100dvw;
        height: 100dvh;
        background-color: gray;
    }
</style>
