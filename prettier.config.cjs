/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  jsxSingleQuote: true,
}

module.exports = config
