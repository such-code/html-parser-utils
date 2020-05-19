import { DomHandler, Parser } from 'htmlparser2';
import { ParserOptions } from 'htmlparser2/lib';
import { DataNode, DomHandlerOptions, Element, Node, NodeWithChildren } from 'domhandler/lib';
import { ProcessingInstruction } from 'domhandler/lib/node';

/**
 * Escapes special chars and converts string to RegExp matching that string.
 * @param $string
 * @returns RegExp
 */
export function stringToRegExp($string: string): RegExp {
    return new RegExp(`^${$string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')}$`);
}

/**
 * Type guard to check if $value is Node.
 * @param $value
 * @returns boolean
 */
export function isNode($value: any): $value is Node {
    return typeof $value === 'object' && $value instanceof Node;
}

/**
 * Type guard to check if $value is DataNode.
 * @param $value
 * @returns boolean
 */
export function isDataNode($value: any): $value is DataNode {
    return typeof $value === 'object' && $value instanceof DataNode;
}

/**
 * Type guard to check if $value is ProcessingInstruction.
 * @param $value
 * @returns boolean
 */
export function isProcessingInstruction($value: any): $value is ProcessingInstruction {
    return typeof $value === 'object' && $value instanceof ProcessingInstruction;
}

/**
 * Type guard to check if $value is NodeWithChildren.
 * @param $value
 * @returns boolean
 */
export function isNodeWithChildren($value: any): $value is NodeWithChildren {
    return typeof $value === 'object' && $value instanceof NodeWithChildren;
}

/**
 * Type guard to check if $value is Element.
 * @param $value
 * @returns boolean
 */
export function isElement($value: any): $value is Element {
    return typeof $value === 'object' && $value instanceof Element;
}

const defaultParserOptions: ParserOptions = {
    lowerCaseTags: false,
    lowerCaseAttributeNames: false
};

/**
 * Converts string to Array of Nodes using domhandler library.
 * @param $data
 * @param $parserOptions optional ParserOptions. Default values for `lowerCaseTags` and `lowerCaseAttributeNames` are
 * set to false.
 * @param $domHandlerOptions optional DomHandlerOptions. Override default values for DomHandler, could be used for html
 * optimization.
 * @returns Promise<Array<Node>>
 */
export function stringToDom(
    $data: string,
    $parserOptions?: ParserOptions,
    $domHandlerOptions?: DomHandlerOptions
): Promise<Array<Node>> {
    return new Promise<Array<Node>>(($resolve, $reject) => {
        const parser = new Parser(
            new DomHandler(
                ($error: any, $dom: Array<Node>) => {
                    if ($error) {
                        $reject($error);
                    } else {
                        $resolve($dom);
                    }
                },
                $domHandlerOptions
            ),
            {
                ...defaultParserOptions,
                ...$parserOptions,
            }
        );
        parser.parseComplete($data);
    });
}
