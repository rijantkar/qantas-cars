module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:jsx-a11y/recommended'],
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks'],
  env: {
    browser: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    window: true,
    document: true,
    it: true,
    expect: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    'arrow-parens': 0,
    'arrow-body-style': 0,
    camelcase: 0,
    'comma-dangle': [2, 'never'],
    'linebreak-style': 0,
    'global-require': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    indent: [2, 2, { SwitchCase: 1, VariableDeclarator: 2 }],
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/href-no-hash': [0],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'jsx-a11y/label-has-associated-control': 0,
    'max-len': 0,
    'no-alert': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-extra-boolean-cast': 0,
    'no-prototype-builtins': 0,
    'no-restricted-globals': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'no-plusplus': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [0, 2],
    'react/forbid-prop-types': 0,
    'react/destructuring-assignment': 'off',
    'react/no-array-index-key': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 0,
    'react-hooks/rules-of-hooks': 'error'
  }
};
