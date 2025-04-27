/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		// Use import instead of require for ESM
		// @ts-expect-error - tailwindcss plugin types
		(await import('@tailwindcss/aspect-ratio')).default,
		// @ts-expect-error - tailwindcss plugin types
		(await import('@tailwindcss/typography')).default,
	],
}
