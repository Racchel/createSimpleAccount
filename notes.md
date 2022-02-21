## Usar Jest com ES6

1. yarn add jest babel-jest @babel/plugin-transform-runtime @babel/preset-env -D

2. criar jest.config.js na raiz:

``` js
export default {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['**/src/**/*.js'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  }
}
```

3. criar .babelrc na raiz

``` json
{
  "presets": [
      "@babel/preset-env"
  ],
  "plugins": [
    ["@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]
}
```

4. Se tiver usando o Standard, add no package.json:

``` json
"standard": {
    "env": [
      "jest"
    ]
  },
```

5. Add script de teste:

``` json
"scripts": {
  "test": "jest --silent --verbose --colors --noStackTrace"
},
```