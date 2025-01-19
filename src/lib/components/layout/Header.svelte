<script>
    import { base } from '$app/paths';
</script>

<header class="site-header" role="banner">
    <div class="content">
        <nav class="navigation">
            <p><a href="{base}/">home</a></p>
            <p><a href="{base}/development">work</a></p>
            <p><a href="{base}/resume">resume</a></p>
        </nav>
    </div>
</header>

<style lang="scss">
    header {
        margin: 0 auto;
        padding: 20px;

        .content {
            max-width: 1290px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
        }

        nav {
            display: flex; 
            flex-direction: row;
            justify-content: space-around;
            max-width: 200px; 
            width: 100%;

            .desktop-nav {
                display: flex; 
                flex-direction: row;
            }

            a {
                color: $color-black;
                font-family: $font-zen;
                text-decoration: none;

                &:hover {
                    text-decoration: underline; 
                }
            }

            p {
                padding: 5px 10px;
                margin: 0;
            }

            @media (max-width: 500px) {
                max-width: 275px; 
                width: 100%; 
            }

            @media (max-width: 420px) {
                max-width: 100%; 
                width: 100%; 
            }
        }
    }
</style>