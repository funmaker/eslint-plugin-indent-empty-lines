"use strict";

const rule = require("../../../lib/rules/indent-empty-lines"),
      RuleTester = require("eslint").RuleTester;

const validCode = `
function foo() {
  var ret = null;
  
  return ret;
}
`;

const invalidCode = `
function foo() {
  var ret = null;

  return ret;
}
`;

const ruleTester = new RuleTester();
ruleTester.run("indent-empty-lines", rule, {
    valid: [validCode],

    invalid: [
        {
            code: invalidCode,
            errors: [{
                message: "Empty line not indented correctly. (expected 2 spaces, found 0)",
                type: "Program"
            }],
            output: validCode
        }
    ]
});
