"use strict";

const rule = require("../../../lib/rules/indent-empty-lines"),
      RuleTester = require("eslint").RuleTester;

const validCodeWithSpaces = `
function foo() {
  var ret = null;
  
  return ret;
}
`;

const validCodeWithTabs = `
function foo() {
	var ret = null;
	
	return ret;
}
`;

const invalidCodeWithSpaces = `
function foo() {
  var ret = null;

  return ret;
}
`;

const invalidCodeWithTabs = `
function foo() {
	var ret = null;

	return ret;
}
`;

const ruleTester = new RuleTester();
ruleTester.run("indent-empty-lines", rule, {
    valid: [
        {
            code: validCodeWithSpaces,
        },
        {
            code: validCodeWithTabs,
            options: ["tab"],
        },
    ],
    
    invalid: [
        {
            code: invalidCodeWithSpaces,
            errors: [{
                message: "Empty line not indented correctly. (expected 2 spaces, found 0)",
                type: "Program",
            }],
            output: validCodeWithSpaces,
        },
        {
            code: invalidCodeWithTabs,
            options: ["tab"],
            errors: [{
                message: "Empty line not indented correctly. (expected 1 tabs, found 0)",
                type: "Program",
            }],
            output: validCodeWithTabs,
        },
    ],
});
