import {DomHandler, Parser} from 'htmlparser2';
import {ParserOptions} from 'htmlparser2/lib';
import {DataNode, Element, Node, NodeWithChildren} from 'domhandler/lib';
import {ProcessingInstruction} from 'domhandler/lib/node';

export function stringToRegExp($string: string): RegExp {
    return new RegExp(`^${$string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')}$`);
}

const defaultParserOptions: ParserOptions = {
    lowerCaseTags: false,
    lowerCaseAttributeNames: false
};

export function isNode($value: any): $value is Node {
    return typeof $value === 'object' && $value instanceof Node;
}

export function isDataNode($value: any): $value is DataNode {
    return typeof $value === 'object' && $value instanceof DataNode;
}

export function isProcessingInstruction($value: any): $value is ProcessingInstruction {
    return typeof $value === 'object' && $value instanceof ProcessingInstruction;
}

export function isNodeWithChildren($value: any): $value is NodeWithChildren {
    return typeof $value === 'object' && $value instanceof NodeWithChildren;
}

export function isElement($value: any): $value is Element {
    return typeof $value === 'object' && $value instanceof Element;
}

export function stringToDom($data: string, $options: ParserOptions = {}): Promise<Array<Node>> {
    return new Promise<Array<Node>>(($resolve, $reject) => {
        const parser = new Parser(
            new DomHandler(($error: any, $dom: Array<Node>) => {
                if ($error) {
                    $reject($error);
                } else {
                    $resolve($dom);
                }
            }),
            {
                ...defaultParserOptions,
                ...$options,
            }
        );
        parser.parseComplete($data);
    });
}
