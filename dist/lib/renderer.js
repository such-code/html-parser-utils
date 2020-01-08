"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./list");
const lib_1 = require("htmlparser2/lib");
/**
 * Helps render HTML AST.
 */
class DomRenderer {
    constructor(options = {}) {
        this.options = options;
    }
    /**
     * Wraps the attribute in single or double quotes.
     */
    static quote($value) {
        if (!$value) {
            return '""';
        }
        const delimiter = /"/.test($value) ? "'" : '"';
        return delimiter + $value + delimiter;
    }
    ;
    renderTag($element) {
        let render = this.openTag($element);
        if (list_1.List.node.has($element.type) && !list_1.List.singular.has($element.name)) {
            if (Array.isArray($element.children)) {
                render += this.renderNodes($element.children);
            }
            render += this.closeTag($element);
        }
        return render;
    }
    /**
     * Create starting tag for element, if required an additional white space will
     * be added to retain flow of inline elements.
     */
    openTag($element) {
        const attributes = this.attributes($element);
        return attributes
            ? `<${$element.name} ${attributes}>`
            : `<${$element.name}>`;
    }
    ;
    /**
     * Loop set of attributes belonging to an element. Surrounds attributes with
     * quotes if required, omits if not.
     */
    attributes($element) {
        if (typeof $element.attribs === 'object' && $element.attribs !== null) {
            return Object.keys($element.attribs)
                .map($key => `${$key}=${DomRenderer.quote($element.attribs[$key])}`)
                .join(' ');
        }
        return undefined;
    }
    ;
    closeTag($element) {
        return `</${$element.name}>`;
    }
    renderCDATA($element) {
        return `<![CDATA[${this.renderNodes($element.children)}]]>`;
    }
    /**
     * Return simple text, no special treatment.
     */
    renderText($element) {
        return $element.data;
    }
    ;
    /**
     * Returned simple comment.
     */
    renderComment($element) {
        return `<!--${$element.data}-->`;
    }
    ;
    /**
     * Return parsed directive.
     */
    renderDirective($element) {
        return `<${$element.data}>`;
    }
    ;
    /**
     * Completely render one element including children.
     */
    renderNode($node) {
        switch ($node.type) {
            case lib_1.ElementType.CDATA:
                return this.renderCDATA($node);
            case lib_1.ElementType.Comment:
                return this.renderComment($node);
            case lib_1.ElementType.Doctype:
                throw Error('WTF??');
            case lib_1.ElementType.Directive:
                return this.renderDirective($node);
            case lib_1.ElementType.Script:
            case lib_1.ElementType.Style:
            case lib_1.ElementType.Tag:
                return this.renderTag($node);
            case lib_1.ElementType.Text:
                return this.renderText($node);
        }
        return undefined;
    }
    /**
     * Renders array of elements
     */
    renderNodes($elements) {
        return $elements
            .map($ => this.renderNode($))
            .join('');
    }
}
exports.DomRenderer = DomRenderer;
//# sourceMappingURL=renderer.js.map