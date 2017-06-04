# Milad's Eslint Config Rules
My Preferred ESLint Rules.

## Installation

```
$ npm install --save-dev eslint eslint-config-milad
```

## Usage

Once the `eslint-config-milad` package is installed, you can use it by specifying `milad` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "milad",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Using the `milad` config with `eslint:recommended`

```js
{
  "extends": ["eslint:recommended", "google"],
  "rules": {
    // Additional, per-project rules...
  }
}
```
