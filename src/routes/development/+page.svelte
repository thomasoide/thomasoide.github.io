<script>
    import Card from './Card.svelte';
    import data from './data.json'; 

    let dataFormatted = data.map((d) => {
        let useDataViz = d.data_viz === "TRUE" ? 'data_viz' : ''; 
        let useDesign = d.design === "TRUE" ? 'design' : ''
        let useDevelopment = d.development === "TRUE" ? 'development' : ''
        return { 
            label: d.label, 
            url: d.url, 
            tools: d.tools, 
            img: d.img,
            desc: d.desc,
            workType: [useDataViz, useDesign, useDevelopment].filter(d => d)
        }
    })
</script>

<h1>work</h1>

{#each dataFormatted as record}
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