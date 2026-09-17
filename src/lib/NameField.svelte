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
        flex-direction: column;
        gap: var(--small-spacing);
        margin-bottom: var(--default-spacing);
    }

    .label {
        font-weight: var(--font-bold);
    }

    .letters {
        display: flex;
        flex-direction: column;
        gap: var(--small-spacing);
    }

    .word {
        display: flex;
        gap: 0.625em;
        font-size: var(--font-size);

        @media (width <= 430px) {
            font-size: 0.8em;
        }

        @media (width <= 375px) {
            font-size: 0.75em;
        }

        @media (width <= 325px) {
            font-size: 0.7em;
        }
    }

    .letter {
        background-color: var(--white);
        aspect-ratio: 1 / 1;
        width: 1.5em;
        text-align: center;
    }
</style>
