<script lang="ts">
    import NavButton from "./NavButton.svelte";
    import { isScrollBarAtTopOfPage } from "$lib/scrolling";
    import { onMount } from "svelte";

    type Button = {
        text: string;
        target: string;
    };

    const buttons: Button[] = [
        { text: "Home", target: "home" },
        { text: "About", target: "about" },
        { text: "Portfolio", target: "portfolio" },
        { text: "Resume", target: "resume" },
    ];

    let activeButton = "";
    let handlingClick = false;
    let observer: IntersectionObserver | null = null;

    const findButtonFromTarget = (target: string) =>
        buttons.find((button) => button.target === target);

    const clickHandler = (button: Button) => {
        if (!button.target) return;
        const element = document.getElementById(button.target);
        if (!element) return;
        handlingClick = true;
        activeButton = button.target;
        element.scrollIntoView({ behavior: "smooth" });
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (handlingClick && entry.target.id === activeButton) {
                handlingClick = false;
            } else if (handlingClick) {
                return;
            }

            const button = findButtonFromTarget(entry.target.id);
            if (!button || !entry.isIntersecting) return;
            activeButton = button.target;
        });
    };

    const handleScroll = () => {
        const nav = document.getElementById("nav");
        if (!nav) return;

        if (isScrollBarAtTopOfPage()) {
            nav.classList.remove("shadow-sm", "bg-base");
            return;
        }

        nav.classList.add("shadow-sm", "bg-base");
    };

    onMount(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 0.25,
        });

        buttons.forEach((button) => {
            const section = document.getElementById(button.target);
            if (section) observer?.observe(section);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer?.disconnect();
        };
    });
</script>

<nav
    id="nav"
    class="flex flex-row justify-center p-5 w-screen text-regular fixed top-0 left-0 right-0 z-50 transition-all"
>
    <div>
        {#each buttons as button (button.target)}
            <NavButton
                {...button}
                isActive={activeButton === button.target}
                on:click={() => clickHandler(button)}
            />
        {/each}
    </div>
</nav>
