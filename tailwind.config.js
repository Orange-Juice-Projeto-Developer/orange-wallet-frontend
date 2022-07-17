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
			gray2: "#CBCBCB",
			orange: "#FF8A00",
			orange2: "#FFCAA4",
			background: "#131313",
			background2: "#383838",
			green: "#DCFFA4"
		},
		fontFamily: {
			roboto: ["Roboto", "sans-serif"]
		}
	},
	plugins: [],
};
