import { DataNode, Element, Node, NodeWithChildren } from 'domhandler/lib';
export declare type DomRendererOptions = {};
/**
 * Helps rendering HTML AST.
 */
export declare class DomRenderer {
    protected readonly options: DomRendererOptions;
    /**
     * Wraps the attribute in single or double quotes.
     * @param $value
     * @static
     */
    static quote($value: string): string;
    constructor(options?: DomRendererOptions);
    protected renderTag($element: Element): string;
    /**
     * Create starting tag for element, if required an additional white space will be added to retain flow of inline
     * elements.
     * @param $element
     */
    protected openTag($element: Element): string;
    /**
     * Loops through set of attributes belonging to an element. Surrounds attributes with quotes if required, omits if
     * not.
     * @param $element
     */
    protected attributes($element: Element): string;
    protected closeTag($element: Element): string;
    protected renderCDATA($element: NodeWithChildren): string;
    /**
     * Render simple text, no special treatment.
     * @param $element
     */
    protected renderText($element: DataNode): string;
    /**
     * Render simple comment.
     * @param $element
     */
    protected renderComment($element: DataNode): string;
    /**
     * Render parsed directive.
     * @param $element
     */
    protected renderDirective($element: DataNode): string;
    /**
     * Completely render one element including children.
     * @param $node
     */
    renderNode($node: Node): string;
    /**
     * Renders array of elements.
     * @param $elements
     */
    renderNodes($elements: Array<Node>): string;
}
//# sourceMappingURL=renderer.d.ts.map