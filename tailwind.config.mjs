/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  gradientStart: '#FF416C',
		  gradientEnd: '#FF4B2B',
		},
	  },
	},
	plugins: [],
  }
  