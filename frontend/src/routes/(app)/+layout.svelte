<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Nav />

<main class="flex-1 flex justify-center items-center w-full">
    <slot />
</main>

<Footer />
