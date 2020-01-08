import { Node } from 'domhandler';
import { Parser, DomHandler } from 'htmlparser2';
import {ParserOptions} from 'htmlparser2/lib';

export function stringToRegExp($string: string): RegExp {
    return new RegExp(`^${$string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')}$`);
}

const defaultParserOptions: ParserOptions = {
    lowerCaseTags: false,
    lowerCaseAttributeNames: false
};

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
