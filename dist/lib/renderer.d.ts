import { DataNode, Element, Node, NodeWithChildren } from 'domhandler/lib';
export declare type DomRendererOptions = {};
/**
 * Helps render HTML AST.
 */
export declare class DomRenderer {
    protected readonly options: DomRendererOptions;
    /**
     * Wraps the attribute in single or double quotes.
     */
    static quote($value: string): string;
    constructor(options?: DomRendererOptions);
    protected renderTag($element: Element): string;
    /**
     * Create starting tag for element, if required an additional white space will
     * be added to retain flow of inline elements.
     */
    protected openTag($element: Element): string;
    /**
     * Loop set of attributes belonging to an element. Surrounds attributes with
     * quotes if required, omits if not.
     */
    protected attributes($element: Element): string;
    protected closeTag($element: Element): string;
    protected renderCDATA($element: NodeWithChildren): string;
    /**
     * Return simple text, no special treatment.
     */
    protected renderText($element: DataNode): string;
    /**
     * Returned simple comment.
     */
    protected renderComment($element: DataNode): string;
    /**
     * Return parsed directive.
     */
    protected renderDirective($element: DataNode): string;
    /**
     * Completely render one element including children.
     */
    renderNode($node: Node): string;
    /**
     * Renders array of elements
     */
    renderNodes($elements: Array<Node>): string;
}
