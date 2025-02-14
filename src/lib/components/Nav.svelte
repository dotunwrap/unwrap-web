<script lang="ts">
    import NavButton from "./NavButton.svelte";
    import { isScrollBarAtTopOfPage } from "$lib/scrolling";
    import { onMount } from "svelte";

    type Button = {
        text: string;
        target: string;
    };

    const buttons = [
        {
            text: "Home",
            target: "home",
        },
        {
            text: "About",
            target: "about",
        },
        {
            text: "Portfolio",
            target: "portfolio",
        },
        {
            text: "Resume",
            target: "resume",
        },
    ];

    let activeButton = "";
    let handlingClick = false;

    const findButtonFromTarget = (target: string) => {
        return buttons.find((button) => button.target === target);
    };

    const clickHandler = (button: Button) => {
        if (!button.target) return;
        let element = document.getElementById(button.target);
        handlingClick = true;
        activeButton = button.target;
        element?.scrollIntoView({ behavior: "smooth" });
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (handlingClick && entry.target.id === activeButton) {
                handlingClick = false;
            } else if (handlingClick) {
                return;
            }

            let button = findButtonFromTarget(entry.target.id);
            if (!button || !entry.isIntersecting) return;
            activeButton = button.target;
        });
    };

    onMount(() => {
        window.addEventListener("scroll", () => {
            const nav = document.getElementById("nav");
            if (!nav) return;

            if (isScrollBarAtTopOfPage()) {
                nav.classList.remove("shadow-sm");
                nav.classList.remove("bg-base");
                return;
            }

            nav.classList.add("shadow-sm");
            nav.classList.add("bg-base");
        });

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 0.25,
        });
        buttons.forEach((button) =>
            observer.observe(document.getElementById(button.target) as HTMLElement),
        );
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
