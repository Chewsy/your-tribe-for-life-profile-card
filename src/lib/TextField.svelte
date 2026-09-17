<script>
    let { text, label } = $props();
</script>

<div class="text-field">
    <p class="label">{label}</p>
    <p class="text">{text}</p>
</div>

<style>
    .text-field {
        display: contents;

        & .text {
            border-bottom: 1px solid hsl(0, 0%, 0%);
        }

        & .label {
            font-weight: var(--font-bold);
        }
    }
</style>
