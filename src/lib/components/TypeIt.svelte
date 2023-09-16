<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    
    export let sentences: string[];
    let sentenceIndex = 0;
    let typed = "";
    let currentIndex = 0;
    let isDeleting = false;
    let typingInterval:  ReturnType<typeof setTimeout> | null = null;
    let deletingInterval:  ReturnType<typeof setTimeout> | null = null;

    const startTyping = () => {
        typingInterval = setInterval(() => {
            if (isDeleting) return;

            if (currentIndex < sentences[sentenceIndex].length) {
                typed = sentences[sentenceIndex].slice(0, currentIndex + 1);
                currentIndex++;
                return;
            }

            isDeleting = true;
            setTimeout(() => {
                isDeleting = false;
                clearInterval(typingInterval!);
                currentIndex = sentences[sentenceIndex].length - 1;
                startDeleting();
            }, 1000);
        }, 100);
    }

    const startDeleting = () => {
        deletingInterval = setInterval(() => {
            if (currentIndex >= 0) {
                typed = sentences[sentenceIndex].slice(0, currentIndex);
                currentIndex--;
                return;
            }

            clearInterval(deletingInterval!);
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            currentIndex = 0;
            startTyping();
        }, 100);
    }

    onMount(() => {
        startTyping();
    });

    onDestroy(() => {
        clearInterval(typingInterval!);
        clearInterval(deletingInterval!);
    });
</script>


<div class="{$$props.class}">
    {#if typed}
        {typed}
    {:else}
        &nbsp;
    {/if}
</div>