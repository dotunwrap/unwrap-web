<script lang="ts">
    import Icon from "@iconify/svelte";

    export let name: string;
    export let width = 30;
    export let height = 30;

    const validSocials = ["twitter", "github", "linkedin", "email"];
    if (!validSocials.includes(name)) {
        throw new Error("Invalid social");
    }

    const socials: {[name: string]: {url: string; icon: string}} = {
        twitter: {
            url: "https://twitter.com/dotunwrap",
            icon: "simple-icons:x",
        },
        github: {
            url: "https://github.com/dotunwrap",
            icon: "simple-icons:github",
        },
        linkedin: {
            url: "https://www.linkedin.com/in/dotunwrap",
            icon: "simple-icons:linkedin",
        },
        email: {
            url: "mailto:dotunwrap@pm.me",
            icon: "simple-icons:protonmail",
        }
    };
</script>

<a href="{socials[name].url}" target="_blank" class="group text-subtext1">
    <Icon icon="{socials[name].icon}" width={width} height={height} class="group-hover:text-blue transition-colors" />
</a>
