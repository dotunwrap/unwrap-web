import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import { sveltePreprocess } from "svelte-preprocess";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: [".md"],
};

const base = process.env.PUBLIC_BASE_PATH ?? "";
const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md"],
    preprocess: [sveltePreprocess(), mdsvex(mdsvexOptions)],
    kit: {
        adapter: adapter({
            pages: "build",
            assets: "build",
        }),
        prerender: {
            entries: ["/"],
        },
        paths: {
            base: dev ? "" : base,
        },
    },
};

export default config;
