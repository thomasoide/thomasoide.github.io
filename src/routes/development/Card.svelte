<script>
    import WorkType from "./WorkType.svelte";
    
    let { record } = $props();

</script>

<div class="card">
    <figure class="image">
        {#if record.label === "Hermes"}
            <video controls>
                <source src={record.img} type="video/mp4">
            </video>
        {:else}
            <img src={record.img} />
        {/if}
        
    </figure>
    <div class="text-container">
        <h3>{record.label}</h3>
        <div class="typeContainer">
            {#each record.workType as type}
                <WorkType {type} />
            {/each}
        </div>

        {#if record.desc}
            <p class="desc">
                {record.desc}
            </p>
        {/if}

        {#if record.url}
            <a class="projUrl" href="{record.url}" target="_blank">See the project</a>
        {/if}
    </div>
    
</div>

<style lang="scss">
    .card {
        display: flex; 
        flex-direction: row; 
        margin: 5rem 0;

        figure img, figure video {
            max-width: 350px;
        }

        .text-container {
            padding: 20px;
        }

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

        .desc {
            @include font-clamp(13px, 14px);
        }

        .typeContainer {
            display: flex; 
            flex-direction: row; 
            gap: 5px;
            margin: 8px 0; 
        }
    }

    @media (max-width: 740px) {
        .card {
            display: flex; 
            flex-direction: column; 
            margin: 5rem 0;

            figure img, figure video {
                max-width: none;
                width: 100%;
            }
        }

    }
</style>