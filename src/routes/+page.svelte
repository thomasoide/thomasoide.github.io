<script>
    import github from '$lib/img/github-mark.svg'; 
    import linkedin from '$lib/img/linkedin.svg'; 
    import resume from '$lib/img/resume.png'; 
</script>

<div class="hed-container">
    <h1>thomas oide</h1>
    <div class="link-container">
        <a href="https://github.com/thomasoide" target="_blank"><img alt="github logo" src={github} /></a>
        <a href="https://www.linkedin.com/in/thomasoide/" target="_blank"><img alt="linkedin logo" src={linkedin} /></a>
        <a href="/resume"><img alt="a png with a resume icon" src={resume} /></a>
    </div>
</div>

<p>Hi, I’m Thomas. Thanks for stopping by my portfolio.</p>

<p>I currently live in California and work at Axios, where I create data visualizations and build newsroom tools to help streamline workflows. I previously worked at the Minneapolis Star Tribune, where I built standalone interactives, internal tools and graphics for some of its biggest projects.</p>

<p>I have a degree in data journalism as well as minors in computer science and information technology from the University of Missouri. I consider myself a bit of a Swiss Army knife — I can build graphics and design front-end experiences with D3 and Svelte, develop backends using Django, Python and PostgreSQL and conduct data analysis using R.</p>

<p>Even though I have technical skills, I started out in journalism as a reporter. I worked for two-and-a-half years at The Davis Enterprise, interned twice at The Sacramento Bee and was also a reporting intern at The Boston Globe. That gave me a fundamental understanding of storytelling, which is still what drives the work I do and the things I build everyday.</p>

<p>Take a peek at my Github for code examples or reach out to me via email at thomas.t.oide@gmail.com if you have a question or want to build something together.</p>

<style lang="scss">
    .hed-container {
        display: flex; 
        flex-direction: row; 
        gap: 60px;
        align-items: center;

        h1 {
            color: $color-black;
            display: inline-block;
            box-shadow: inset 0 -22px $color-red;
            line-height: 1.2; 
            padding: 0 5px;
        }

        .link-container { 
            display: flex; 
            flex-direction: row;
            margin-top: 22px;
            gap: 20px;

            img {
                height: 25px; 
                width: 25px;
                opacity: 1; 
                transition: opacity .5s;

                &:hover {
                    opacity: 0.5; 
                    transition: opacity .5s; 
                }
            }
        }

        @media (max-width: 475px) { 
            flex-direction: column;
            justify-content: flex-start;
            gap: 0px;
        }
    }
    
</style>