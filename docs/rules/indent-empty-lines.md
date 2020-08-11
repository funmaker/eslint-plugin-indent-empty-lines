# Enforce indention on empty lines (indent-empty-lines)

Indentation of empty lines can be useful when moving parts of your code.


## Rule Details

This rule allows you to enforce indention on empty lines.

Examples of **incorrect** code for this rule:

```js
function foo() {
  const ret = null;

  return ret;
}
```

Examples of **correct** code for this rule:

```js
function foo() {
  const ret = null;
  
  return ret;
}
```

### Options

```typescript
type Options = "tab" | number;

const defaultOptions: Options = 2;
```

This rule accepts `integer` or `"tab"` string as option. It's a hint used in determining proper indent when
it can't be inferred from the lines around. If `"tab"` then indent is interpreted as tab character, otherwise
multiply of spaces is used.

Bu default `2` spaces are used.

## When Not To Use It

If you want to keep your lines empty or do not care about indentation on empty lines.

