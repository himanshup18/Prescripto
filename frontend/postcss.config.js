//It tells PostCSS to use Tailwind CSS and Autoprefixer as plugins
export default {
  plugins: { 
    tailwindcss: {}, //Integrates Tailwind CSS framework for utility-first CSS styling.
    autoprefixer: {}, //Automatically adds vendor prefixes like -webkit- or -moz- to ensure CSS works in all browsers.
  },
}
