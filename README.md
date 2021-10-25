# eslint-plugin-indent-empty-lines

Enforce indention on empty lines

## Installation

First, you'll need to install [ESLint](http://eslint.org):

```
$ npm install --save-dev eslint
```

Next, install `eslint-plugin-indent-empty-lines`:

```
$ npm install --save-dev eslint-plugin-indent-empty-lines
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
