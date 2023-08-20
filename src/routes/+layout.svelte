<script lang="ts">
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<html lang="en">
    <body class="min-h-screen flex flex-col bg-gradient-to-b from-base to-mantle text-text dark:frappe">
        <Nav />

        <main class="min-h-screen flex justify-center items-center">
            <slot />
        </main>

        <Footer />
    </body>
</html>
