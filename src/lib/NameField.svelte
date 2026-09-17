<script>
    let { text, label } = $props();
    const words = $derived(text.toUpperCase().split(" "));
</script>

<div class="name-field">
    <p class="label">{label}</p>

    <div class="letters">
        {#each words as word}
            <div class="word">
                {#each word.split("") as letter}
                    <span class="letter">{letter}</span>
                {/each}
            </div>
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
        margin-bottom: var(--default-spacing);
    }

    .label {
        font-weight: var(--font-bold);
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
