<script lang="ts">
  import NavButton from "./NavButton.svelte";
  import { isScrollBarAtTopOfPage } from "$lib/scrolling";
  import { onMount } from "svelte";

  onMount(() => {
    window.addEventListener("scroll", () => {
      const nav = document.getElementById("nav");
      if (!nav) return;

      if (isScrollBarAtTopOfPage()) {
        nav?.classList.remove("shadow-sm");
        nav?.classList.remove("bg-base");
        return;
      }

      nav?.classList.add("shadow-sm");
      nav?.classList.add("bg-base");
    })
  });
</script>

<nav id="nav" class="flex flex-row justify-center p-5 w-screen text-regular fixed top-0 left-0 right-0 z-50 transition-all">
    <div>
        <NavButton href="/" text="Home" />
        <NavButton href="/about" text="About" />
        <!-- <NavButton href="/contact" text="Contact" /> -->
        <NavButton href="/portfolio" text="Portfolio" />
    </div>
</nav>