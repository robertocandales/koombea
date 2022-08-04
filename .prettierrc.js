module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  trailingComma: 'none',
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,scss,json,html}',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
