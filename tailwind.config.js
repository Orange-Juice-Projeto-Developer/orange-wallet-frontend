/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {},
		colors: {
			gray: {
				50: "#F8F9FA",
				100: "#CBCBCB",
				300: "#383838",
				600: "#151515",
				700: "#131313"
			},
			orange: {
				100: "#FFB45C",
				500: "#FF8A00",
				700: "#FC7505"
			},
			red: {
				100: "#FFCAA4",
				400: "#FF523A"
			},
			green: {
				100: "#DCFFA4",
				400: "#AEFE49"
			}
		},
		fontFamily: {
			roboto: ["Roboto", "sans-serif"]
		}
	},
	plugins: [],
};
