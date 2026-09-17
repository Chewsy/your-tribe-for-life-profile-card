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
    .name-field {
        display: contents;
    }

    .label {
        font-weight: var(--font-bold);
    }

    .letters {
        display: flex;
        flex-direction: row;
        gap: var(--large-spacing);
    }

    .word {
        display: flex;
        gap: 0.625em;
        font-size: var(--font-size);
    }

    .letter {
        background-color: var(--white);
        aspect-ratio: 1 / 1;
        width: 1.5em;
        text-align: center;
    }

    @media (width <= 790px) {
        .letters {
            gap: var(--default-spacing);
        }
    }

    @media (width <= 600px) {
        .letters {
            flex-direction: column;
            gap: var(--small-spacing);
        }
    }

    @media (width <= 375px) {
        .letter {
            width: 1.25em;
        }

        .word {
            gap: 0.5em;
        }
    }
</style>
