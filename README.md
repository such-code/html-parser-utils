### @such-code/html-parser-utils

Generic utils to simplify work with [htmlparser2](https://github.com/fb55/htmlparser2) library.

#### HtmlNode
Contains definitions for html elements.

#### DomRenderer
```TypeScript
import { Node } from 'htmlparser2';

export declare type DomRendererOptions = {};

/**
 * Helps rendering HTML AST.
 */
export declare class DomRenderer {
    /**
     * Wraps the attribute in single or double quotes.
     * @param $value
     * @static
     */
    static quote($value: string): string;
    
    constructor(options?: DomRendererOptions);

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
```

#### Helper methods

```TypeScript
import { ParserOptions } from 'htmlparser2/lib';
import { DataNode, Element, Node, NodeWithChildren } from 'domhandler/lib';
import { ProcessingInstruction } from 'domhandler/lib/node';

/**
 * Escapes special chars and converts string to RegExp matching that string.
 * @param $string
 * @returns RegExp
 */
export declare function stringToRegExp($string: string): RegExp;

/**
 * Type guard to check if $value is Node.
 * @param $value
 * @returns boolean
 */
export declare function isNode($value: any): $value is Node;

/**
 * Type guard to check if $value is DataNode.
 * @param $value
 * @returns boolean
 */
export declare function isDataNode($value: any): $value is DataNode;

/**
 * Type guard to check if $value is ProcessingInstruction.
 * @param $value
 * @returns boolean
 */
export declare function isProcessingInstruction($value: any): $value is ProcessingInstruction;

/**
 * Type guard to check if $value is NodeWithChildren.
 * @param $value
 * @returns boolean
 */
export declare function isNodeWithChildren($value: any): $value is NodeWithChildren;

/**
 * Type guard to check if $value is Element.
 * @param $value
 * @returns boolean
 */
export declare function isElement($value: any): $value is Element;

/**
 * Converts string to Array of Nodes using domhandler library.
 * @param $data
 * @param $options optional ParserOptions. Default values for `lowerCaseTags` and `lowerCaseAttributeNames` are set to
 * false.
 * @returns Promise<Array<Node>>
 */
export declare function stringToDom($data: string, $options?: ParserOptions): Promise<Array<Node>>;
```
