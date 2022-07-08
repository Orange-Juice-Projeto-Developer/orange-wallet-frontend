/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {},
		colors: {
			white: "#F8F9FA",
			black: "#151515",
			gray: "#383838",
			orange: "#FF8A00",
			background: "#131313"
		},
		fontFamily: {
			roboto: ["Roboto", "sans-serif"]
		}
	},
	plugins: [],
};
