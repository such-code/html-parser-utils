import {List} from './list';
import {DataNode, Element, Node, NodeWithChildren} from 'domhandler/lib';
import {ElementType} from 'htmlparser2/lib';

export type DomRendererOptions = {
    // This could be extended someday,
}

/**
 * Helps render HTML AST.
 */
export class DomRenderer {
    /**
     * Wraps the attribute in single or double quotes.
     */
    public static quote($value: string): string {
        if (!$value) {
            return '""';
        }
        const delimiter = /"/.test($value) ? "'" : '"';
        return delimiter + $value + delimiter;
    };

    public constructor(
        protected readonly options: DomRendererOptions = {}
    ) {
    }

    protected renderTag($element: Element): string {
        let render = this.openTag($element);
        if (List.node.has($element.type) && !List.singular.has($element.name)) {
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
    protected openTag($element: Element): string {
        const attributes = this.attributes($element);
        return attributes
            ? `<${$element.name} ${attributes}>`
            : `<${$element.name}>`;
    };

    /**
     * Loop set of attributes belonging to an element. Surrounds attributes with
     * quotes if required, omits if not.
     */
    protected attributes($element: Element): string {
        if (typeof $element.attribs === 'object' && $element.attribs !== null) {
            return Object.keys($element.attribs)
                .map($key => `${$key}=${DomRenderer.quote($element.attribs[$key])}`)
                .join(' ');
        }
        return undefined;
    };

    protected closeTag($element: Element): string {
        return `</${$element.name}>`;
    }

    protected renderCDATA($element: NodeWithChildren): string {
        return `<![CDATA[${this.renderNodes($element.children)}]]>`;
    }

    /**
     * Return simple text, no special treatment.
     */
    protected renderText($element: DataNode): string {
        return $element.data;
    };

    /**
     * Returned simple comment.
     */
    protected renderComment($element: DataNode): string {
        return `<!--${$element.data}-->`;
    };

    /**
     * Return parsed directive.
     */
    protected renderDirective($element: DataNode): string {
        return `<${$element.data}>`;
    };

    /**
     * Completely render one element including children.
     */
    public renderNode($node: Node): string {
        switch ($node.type) {
            case ElementType.CDATA:
                return this.renderCDATA($node as NodeWithChildren);
            case ElementType.Comment:
                return this.renderComment($node as DataNode);
            case ElementType.Doctype:
                throw Error('WTF??');
            case ElementType.Directive:
                return this.renderDirective($node as DataNode);
            case ElementType.Script:
            case ElementType.Style:
            case ElementType.Tag:
                return this.renderTag($node as Element);
            case ElementType.Text:
                return this.renderText($node as DataNode);
        }
        return undefined;
    }

    /**
     * Renders array of elements
     */
    public renderNodes($elements: Array<Node>): string {
        return $elements
            .map($ => this.renderNode($))
            .join('');
    }
}
