<script>
    import Card from './Card.svelte';
    import data from './data.json'; 


</script>

<h1>writing</h1>

{#each data as record}
    <Card {record} />
{/each}

<style lang="scss">
    h1 {
        color: $color-black;
        display: inline-block;
        box-shadow: inset 0 -22px $color-red;
        line-height: 1.2; 
        padding: 0 5px;
    }
</style>