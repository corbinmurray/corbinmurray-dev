// @ts-check
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import path from "path";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	vite: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
				"@repo/ui": path.resolve("../", "../", "packages", "ui"),
			},
		},
	},
});
