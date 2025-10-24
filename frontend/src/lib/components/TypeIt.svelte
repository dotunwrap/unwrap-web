<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    export let sentences: string[] = [];

    let sentenceIndex = 0;
    let typed = "";
    let currentIndex = 0;
    let isDeleting = false;
    let typingInterval: ReturnType<typeof setInterval> | null = null;
    let deletingInterval: ReturnType<typeof setInterval> | null = null;
    let pauseTimeout: ReturnType<typeof setTimeout> | null = null;

    const clearTypingInterval = () => {
        if (typingInterval) {
            clearInterval(typingInterval);
            typingInterval = null;
        }
    };

    const clearDeletingInterval = () => {
        if (deletingInterval) {
            clearInterval(deletingInterval);
            deletingInterval = null;
        }
    };

    const clearPauseTimeout = () => {
        if (pauseTimeout) {
            clearTimeout(pauseTimeout);
            pauseTimeout = null;
        }
    };

    const clearTimers = () => {
        clearTypingInterval();
        clearDeletingInterval();
        clearPauseTimeout();
    };

    const startTyping = () => {
        if (!sentences.length) return;
        clearTypingInterval();

        typingInterval = setInterval(() => {
            if (isDeleting) return;

            const sentence = sentences[sentenceIndex];
            if (!sentence) return;

            if (currentIndex < sentence.length) {
                typed = sentence.slice(0, currentIndex + 1);
                currentIndex++;
                return;
            }

            isDeleting = true;
            clearPauseTimeout();
            pauseTimeout = setTimeout(() => {
                isDeleting = false;
                clearTypingInterval();
                currentIndex = sentence.length - 1;
                startDeleting();
            }, 1000);
        }, 100);
    };

    const startDeleting = () => {
        if (!sentences.length) {
            clearTimers();
            typed = "";
            return;
        }

        clearDeletingInterval();

        deletingInterval = setInterval(() => {
            const sentence = sentences[sentenceIndex];
            if (!sentence) {
                clearTimers();
                sentenceIndex = 0;
                currentIndex = 0;
                startTyping();
                return;
            }

            if (currentIndex >= 0) {
                typed = sentence.slice(0, currentIndex);
                currentIndex--;
                return;
            }

            clearDeletingInterval();
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            currentIndex = 0;
            isDeleting = false;
            startTyping();
        }, 100);
    };

    $: if (!sentences.length) {
        clearTimers();
        typed = "";
        currentIndex = 0;
        sentenceIndex = 0;
        isDeleting = false;
    } else if (!typingInterval && !deletingInterval) {
        startTyping();
    }

    onMount(() => {
        startTyping();
    });

    onDestroy(() => {
        clearTimers();
    });
</script>

<div class={$$props.class} {...$$restProps}>
    {#if typed}
        {typed}
    {:else}
        &nbsp;
    {/if}
</div>
