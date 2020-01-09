"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlparser2_1 = require("htmlparser2");
const lib_1 = require("domhandler/lib");
const node_1 = require("domhandler/lib/node");
function stringToRegExp($string) {
    return new RegExp(`^${$string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')}$`);
}
exports.stringToRegExp = stringToRegExp;
const defaultParserOptions = {
    lowerCaseTags: false,
    lowerCaseAttributeNames: false
};
function isNode($value) {
    return typeof $value === 'object' && $value instanceof lib_1.Node;
}
exports.isNode = isNode;
function isDataNode($value) {
    return typeof $value === 'object' && $value instanceof lib_1.DataNode;
}
exports.isDataNode = isDataNode;
function isProcessingInstruction($value) {
    return typeof $value === 'object' && $value instanceof node_1.ProcessingInstruction;
}
exports.isProcessingInstruction = isProcessingInstruction;
function isNodeWithChildren($value) {
    return typeof $value === 'object' && $value instanceof lib_1.NodeWithChildren;
}
exports.isNodeWithChildren = isNodeWithChildren;
function isElement($value) {
    return typeof $value === 'object' && $value instanceof lib_1.Element;
}
exports.isElement = isElement;
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