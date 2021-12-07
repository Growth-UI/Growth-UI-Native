import babel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';

// Heads up!
// Please use this function directly and don't reexport it in utils.
// https://github.com/prettier/prettier/issues/4959

const formatCode = (code: string) => {
  if (!code) return '';

  const formatted = prettier.format(code, {
    singleQuote: true,
    trailingComma: 'all',
    parser: 'babel',
    plugins: [babel],
  });

  return formatted;
};

export default formatCode;
