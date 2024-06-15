import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "calculator-app",
            filename: "remoteEntry.js",
            exposes: {
                "./CalculatorApp": "./src/App.tsx",
            },
            shared: ["react"],
        }),
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
    },
});
