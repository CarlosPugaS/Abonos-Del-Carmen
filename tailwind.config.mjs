import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'background': '#FEFAE0',
				'primary': '#283618',
				'secondary': '#606C38',
				'accent': '#BC6C25',
				'light-accent': '#A4AC86',
			}
		},
	},
	plugins: [],
} satisfies Config 