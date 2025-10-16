<script>
    import Social from "./Social.svelte";
</script>

<footer id="footer" class="flex flex-row bg-crust items-center py-3 justify-center">
    <div class="flex flex-row justify-center items-center *:mx-2">
        <Social name="github" />
        <Social name="linkedin" />
        <Social name="twitter" />
        <Social name="email" />
    </div>
    <a
        href="https://github.com/dotunwrap/unwrap-web"
        target="_blank"
        class="absolute right-4 italic text-sm text-subtext1 hover:text-blue transition-colors"
        >view source →</a
    >
</footer>
