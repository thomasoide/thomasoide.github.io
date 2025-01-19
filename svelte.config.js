import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		})
	},
	preprocess: sveltePreprocess({
		scss: {
			// prependData: "@import './src/scss/app.scss';"
			prependData: `@import "./src/scss/app.scss";`
		},
	})
};

export default config;
