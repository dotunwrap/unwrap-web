<script lang="ts">
    export let error: any;
    console.error(error);
</script>

<div class="flex flex-col justify-center items-center">
    <div class="m-3 flex flex-col justify-center items-center">
        <h1 class="mb-3 text-4xl">Whoops!</h1>
        <p>Looks like this page doesn't exist.</p>
    </div>
    <a href="/" class="rounded-full p-2 bg-mantle hover:bg-crust transition-colors">Return home?</a>
</div>
