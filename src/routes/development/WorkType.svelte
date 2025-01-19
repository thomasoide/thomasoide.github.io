<script>
    let { type } = $props();

    const options = {
        "data_viz": "#61C9A8", 
        "design": "#F4D06F", 
        "development": "#EEEEFF"
    };
</script>

<span 
    class="button"
    style:--color={options[type]}
>
    {type.replace('_', ' ')}
</span>

<style lang="scss">
    .button {
        padding: 4px 6px; 
        background-color: var(--color); 
        font-family: $font-poppins; 
        @include font-clamp(11px, 13px);
    }
</style>