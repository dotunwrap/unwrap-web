import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

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
            base: process.env.NODE_ENV === "development" ? "" : "/unwrap-web",
        },
    },
};

export default config;
