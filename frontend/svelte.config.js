import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const base = process.env.PUBLIC_BASE_PATH ?? "";
const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),
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
