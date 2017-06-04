# Milad's Eslint Config Rules
My Preferred ESLint Rules.

## Installation

```
$ npm install --save-dev eslint eslint-config-milad
```

## Usage

Once the `eslint-config-milad` package is installed, you can use it by specifying `milad` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```json
{
  "extends": "milad",
  "rules": {}
}
```

### Using the `milad` config with `eslint:recommended`

```json
{
  "extends": ["eslint:recommended", "milad"],
  "rules": {}
}
```
### Inspiration
How I put my rules in a repository that can be used by all my projects, is inspired by how [Google](https://github.com/google/eslint-config-google) did it.
