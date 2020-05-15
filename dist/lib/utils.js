"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDom = exports.isElement = exports.isNodeWithChildren = exports.isProcessingInstruction = exports.isDataNode = exports.isNode = exports.stringToRegExp = void 0;
const htmlparser2_1 = require("htmlparser2");
const lib_1 = require("domhandler/lib");
const node_1 = require("domhandler/lib/node");
/**
 * Escapes special chars and converts string to RegExp matching that string.
 * @param $string
 * @returns RegExp
 */
function stringToRegExp($string) {
    return new RegExp(`^${$string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')}$`);
}
exports.stringToRegExp = stringToRegExp;
/**
 * Type guard to check if $value is Node.
 * @param $value
 * @returns boolean
 */
function isNode($value) {
    return typeof $value === 'object' && $value instanceof lib_1.Node;
}
exports.isNode = isNode;
/**
 * Type guard to check if $value is DataNode.
 * @param $value
 * @returns boolean
 */
function isDataNode($value) {
    return typeof $value === 'object' && $value instanceof lib_1.DataNode;
}
exports.isDataNode = isDataNode;
/**
 * Type guard to check if $value is ProcessingInstruction.
 * @param $value
 * @returns boolean
 */
function isProcessingInstruction($value) {
    return typeof $value === 'object' && $value instanceof node_1.ProcessingInstruction;
}
exports.isProcessingInstruction = isProcessingInstruction;
/**
 * Type guard to check if $value is NodeWithChildren.
 * @param $value
 * @returns boolean
 */
function isNodeWithChildren($value) {
    return typeof $value === 'object' && $value instanceof lib_1.NodeWithChildren;
}
exports.isNodeWithChildren = isNodeWithChildren;
/**
 * Type guard to check if $value is Element.
 * @param $value
 * @returns boolean
 */
function isElement($value) {
    return typeof $value === 'object' && $value instanceof lib_1.Element;
}
exports.isElement = isElement;
const defaultParserOptions = {
    lowerCaseTags: false,
    lowerCaseAttributeNames: false
};
/**
 * Converts string to Array of Nodes using domhandler library.
 * @param $data
 * @param $options optional ParserOptions. Default values for `lowerCaseTags` and `lowerCaseAttributeNames` are set to
 * false.
 * @returns Promise<Array<Node>>
 */
function stringToDom($data, $options) {
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
