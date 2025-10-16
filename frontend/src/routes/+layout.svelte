<script lang="ts">
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Nav />

<main class="min-h-screen flex justify-center items-center">
    <slot />
</main>

<Footer />
