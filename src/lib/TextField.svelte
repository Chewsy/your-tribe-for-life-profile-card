<script>
    let { text, label } = $props();
</script>

<div class="text-field">
    <p class="label">{label}</p>
    <p class="text">{text}</p>
</div>

<style>
    .text-field {
        display: flex;
        flex-direction: row;
        gap: var(--label-spacing);
        margin-bottom: var(--default-spacing);

        @media (width <= 426px) {
            flex-direction: column;
            gap: var(--small-spacing);
        }

        & p {
            padding: 0;
            margin: 0;
        }

        & .text {
            width: 100px;
            border-bottom: 1px solid hsl(0, 0%, 0%);
        }

        & .label {
            font-weight: var(--font-bold);
        }
    }
</style>
