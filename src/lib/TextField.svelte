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
        gap: 3.125em;

        & p {
            padding: 0;
            margin: 0;
        }

        & .text {
            width: 100px;
            border-bottom: 1px solid hsl(0, 0%, 0%);
        }
    }
</style>
