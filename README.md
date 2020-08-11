# eslint-plugin-indent-empty-lines

Enforce indention on empty lines

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-indent-empty-lines`:

```
$ npm install eslint-plugin-indent-empty-lines --save-dev
```


## Usage

Add `indent-empty-lines` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "indent-empty-lines"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "indent-empty-lines/indent-empty-lines": "warn"
    }
}
```

## Supported Rules

* [indent-empty-lines](docs/rules/indent-empty-lines.md)
