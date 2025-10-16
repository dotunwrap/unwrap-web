import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    const devApiTarget = env.VITE_DEV_API_TARGET || "http://localhost:8000";

    return {
        plugins: [sveltekit()],
        server: {
            host: "0.0.0.0",
            port: 5127,
            proxy: {
                "/api": {
                    target: devApiTarget,
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        preview: {
            host: "0.0.0.0",
            port: 5127,
        },
    };
});
