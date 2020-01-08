"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlparser2_1 = require("htmlparser2");
function stringToRegExp($string) {
    return new RegExp(`^${$string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')}$`);
}
exports.stringToRegExp = stringToRegExp;
const defaultParserOptions = {
    lowerCaseTags: false,
    lowerCaseAttributeNames: false
};
function stringToDom($data, $options = {}) {
    return new Promise(($resolve, $reject) => {
        const parser = new htmlparser2_1.Parser(new htmlparser2_1.DomHandler(($error, $dom) => {
            if ($error) {
                $reject($error);
            }
            else {
                $resolve($dom);
            }
        }), Object.assign(Object.assign({}, defaultParserOptions), $options));
        parser.parseComplete($data);
    });
}
exports.stringToDom = stringToDom;
//# sourceMappingURL=utils.js.map