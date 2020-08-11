"use strict";

const rule = require("../../../lib/rules/indent-empty-lines"),
      RuleTester = require("eslint").RuleTester;

const validCode = `
function foo() {
  const ret = null;
  
  return ret;
}
`;

const invalidCode = `
function foo() {
  const ret = null;

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
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
