<script>
    import { Route } from 'svelte-router-spa'
    import Footing from './Footing.svelte'
    import Heading from './heading.svelte'
    export let currentRoute
    export let params = {}
</script>
 
<div class="app">
    <Heading />
    <section class="section">
        <Route {currentRoute}  {params} />
    </section>
    <Footing />
</div>

<style>
    .app {
        width: 100vw;
        height: 100vh;
    }
</style>