<script>
    
    let { record } = $props();

</script>

<div class="card">
    <h3>{record.headline}</h3>
    <span class="publication">{record.publication}</span>
    {#if record.url}
        <a href="{record.url}" target="_blank">Read full story</a>
    {/if}
</div>

<style lang="scss">
    .card {
        h3 {
            font-family: $font-zen; 
            @include font-clamp(18px, 20px);
            margin: 0;
        }

        a {
            font-family: $font-poppins; 
            font-size: 13px; 
            text-decoration: none; 
            text-transform: uppercase; 
            letter-spacing: .1em;
        }

        .typeContainer {
            display: flex; 
            flex-direction: row; 
            gap: 5px;
        }
    }
</style>