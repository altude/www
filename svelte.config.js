import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { imagePreprocessor } from 'svimg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		imagePreprocessor({
			inputDir: 'static',
			outputDir: 'static/opt',
			webp: true,
			avif: true
		}),
		vitePreprocess()
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
