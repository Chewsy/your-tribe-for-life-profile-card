<script>
    let { text, label } = $props();
    const letters = $derived(text.toUpperCase().split(""));
</script>

<div class="name-field">
    <p>{label}</p>

    <div class="letters">
        {#each letters as letter}
            <span class="letter">{letter === " " ? "\u00A0" : letter}</span>
        {/each}
    </div>
</div>

<style>
    p {
        padding: 0;
        margin: 0;
    }

    .name-field {
        display: flex;
        flex-direction: row;
        gap: 3.125em;
    }

    .letters {
        display: flex;
        gap: 0.625em;

        & .letter {
            margin: 0;
            padding: 0;
            background-color: hsl(0, 0%, 100%);
            aspect-ratio: 1 / 1;
            width: 1.5em;
            text-align: center;
        }
    }
</style>
